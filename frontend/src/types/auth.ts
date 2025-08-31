export type AuthState = {

  user: null | string;
  // isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => Promise<void>;
};
