import { create } from 'zustand';

import { AuthApi } from '../common/api';
import type { SigninSchema, SignupSchema } from '../common/schema';
import { Account } from '../common/types';

type UseAuthStore = {
  authenticated: boolean | null;
  user: Account | null;
  checkAuth: () => Promise<void>;
  signin: (data: SigninSchema) => Promise<void>;
  signup: (data: SignupSchema) => Promise<void>;
  signout: () => Promise<void>;
  setState: (state: Partial<UseAuthStore>) => void;
};

export const useAuthStore = create<UseAuthStore>((set) => ({
  authenticated: null,
  user: null,
  checkAuth: async () => {
    try {
      const { authenticated, user } = await AuthApi.checkAuth();

      set({ authenticated, user });
    } catch (error) {
      set({ authenticated: false, user: null });
    }
  },
  signin: async (data) => {
    try {
      const { authenticated, user } = await AuthApi.signin(data);

      set({ authenticated, user });
    } catch (error) {
      set({ authenticated: false, user: null });
    }
  },
  signup: async (data) => {
    try {
      const { authenticated, user } = await AuthApi.signup(data);

      set({ authenticated, user });
    } catch (error) {
      set({ authenticated: false, user: null });
    }
  },
  signout: async () => {
    try {
      await AuthApi.signout();

      set({ authenticated: false, user: null });
    } catch (error) {
      console.error('Error in signout:', error);
    }
  },
  setState: (newState) => {
    set((state) => ({ ...state, ...newState }));
  },
}));
