import type { components } from 'src/services/api/types';

export type AuthUser = components['schemas']['UserPublic'];

export type AuthState = {
  user: null | string;
  // isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string) => Promise<void>;
  logout: () => Promise<void>;
};
