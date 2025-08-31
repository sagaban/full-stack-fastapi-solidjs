import {
  createContext,
  createDeferred,
  createEffect,
  createSignal,
  type JSXElement,
  useContext,
} from 'solid-js';

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
  const isAuthenticated = createDeferred(() => !!user());

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
    // return () => {
    //   setStoredUser(null);
    //   setUser(null);
    // };
  });

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated(),
        login,
        logout,
        // eslint-disable-next-line solid/reactivity
        user: user(),
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
