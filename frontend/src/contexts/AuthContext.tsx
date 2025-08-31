import { createContext, createEffect, createSignal, type JSXElement, useContext } from 'solid-js';

export interface AuthContext {
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => Promise<void>;
  user: string | null;
}

const AuthContext = createContext<AuthContext>();

const key = 'app.auth.user';

function getStoredUser() {
  return localStorage.getItem(key);
}

function setStoredUser(user: string | null) {
  if (user) {
    localStorage.setItem(key, user);
  } else {
    localStorage.removeItem(key);
  }
}

export const AuthProvider = (props: { children: JSXElement }) => {
  const [user, setUser] = createSignal<string | null>(getStoredUser());

  const logout = async () => {
    setStoredUser(null);
    setUser(null);
    return await Promise.resolve();
  };

  const login = async (username: string) => {
    setStoredUser(username);
    setUser(username);
    return await Promise.resolve();
  };

  createEffect(() => {
    setStoredUser(user());
  });

  return (
    <AuthContext.Provider
      value={{
        get isAuthenticated() {
          return !!user();
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
