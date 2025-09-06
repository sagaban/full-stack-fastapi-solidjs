import { getLoggedInUser, login as loginService } from 'features/auth/services/login';
import { createContext, createEffect, createSignal, type JSXElement, useContext } from 'solid-js';
import { TOKEN_KEY, USER_KEY } from 'src/utils/constants/storage';
import type { AuthUser } from 'types/auth';
export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  user: AuthUser | null | undefined;
}

const AuthContext = createContext<AuthContext>();

function getStoredUser() {
  return localStorage.getItem(USER_KEY)
    ? JSON.parse(localStorage.getItem(USER_KEY) as string)
    : null;
}

function setStoredUser(user?: AuthUser | null) {
  if (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(USER_KEY);
  }
}

const isTokenValid = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

export const AuthProvider = (props: { children: JSXElement }) => {
  const [user, setUser] = createSignal<AuthUser | null | undefined>(getStoredUser());

  const logout = async () => {
    setStoredUser(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    return await Promise.resolve();
  };

  const login = async (username: string, password: string) => {
    const data = await loginService(username, password);
    if (data?.access_token) {
      localStorage.setItem(TOKEN_KEY, data.access_token);
      const user = await getLoggedInUser();
      setStoredUser(user);
      setUser(user);
      return Promise.resolve();
    }
    return Promise.reject(new Error('Failed to login'));
  };

  createEffect(() => {
    setStoredUser(user());
    const checkUser = async () => {
      if (isTokenValid() && !user()) {
        const user = await getLoggedInUser();
        setStoredUser(user);
        setUser(user);
      }
      if (!isTokenValid() && user()) {
        logout();
      }
    };
    checkUser();
  });

  return (
    <AuthContext.Provider
      value={{
        get isAuthenticated() {
          return isTokenValid();
        },
        login,
        logout,
        get user() {
          return user();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    const error = new Error('useAuth must be used within an AuthProvider');
    console.log(error);
    throw error;
  }
  return context;
};
