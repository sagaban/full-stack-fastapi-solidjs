import { apiService } from "src/services/api/api";

// import type { LoginResponse } from "../types";

export const login = async (username: string, password: string) => {
  const response = await apiService.POST('/api/v1/login/access-token', {
    body: {
      username,
      password,
      scope: 'api',
      grant_type: 'password',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return response.data;
};

export const getLoggedInUser = async () => {
  const response = await apiService.GET('/api/v1/users/me');
  return response.data;
};

