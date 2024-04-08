import { SigninSchema, SignupSchema } from './schema';
import { Account } from './types';
import { api } from '../../common/utils/axios';

const AUTH_ROUTE = '/auth';

type AuthApiResponse = {
  authenticated: boolean;
  user: Account;
};

export const AuthApi = {
  signin: (data: SigninSchema) =>
    api.post<AuthApiResponse>(`${AUTH_ROUTE}/signin`, { ...data }).then((res) => res.data),
  signout: () => api.post(`${AUTH_ROUTE}/signout`).then((res) => res.status),
  signup: (data: SignupSchema) => api.post(`${AUTH_ROUTE}/signup`, { ...data }).then((res) => res.data),
  checkAuth: () => api.post<AuthApiResponse>(`${AUTH_ROUTE}/pageload`).then((res) => res.data),
  me: () => api.get('/me').then((res) => res.data),
};
