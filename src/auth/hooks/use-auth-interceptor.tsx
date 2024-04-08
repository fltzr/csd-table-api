import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { AxiosError } from 'axios';

import { AuthApi } from '../common/api';
import { api } from '../../common/utils/axios';

export const useAuthInterceptor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          AuthApi.signout();

          navigate('/signin', {
            state: { from: window.location.pathname, reason: 'unauthorized' },
            replace: true,
          });
        }

        return Promise.reject(new Error(error.message || 'An error occurred'));
      },
    );

    return () => {
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate]);
};
