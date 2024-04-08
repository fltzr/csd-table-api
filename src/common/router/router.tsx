import { Outlet, RouteObject, createBrowserRouter, redirect } from 'react-router-dom';
import { AuthApi } from '../../auth/common/api';

const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    lazy: async () => import('../components/layout'),
    children: [
      {
        index: true,
        lazy: async () => import('../../home/pages/hero'),
      },
      {
        path: 'signin',
        loader: async () => {
          console.log('signin loader');

          return (await AuthApi.checkAuth()).authenticated ? redirect('/app') : null;
        },
        lazy: async () => import('../../auth/pages/signin'),
      },
      {
        path: 'signup',
        loader: async () => {
          console.log('signup loader');

          return (await AuthApi.checkAuth()).authenticated ? redirect('/app') : null;
        },
        lazy: async () => import('../../auth/pages/signup'),
      },
      {
        path: 'app',
        Component: Outlet,
        loader: async () => {
          console.log('signin loader');

          return (await AuthApi.checkAuth()).authenticated ? null : redirect('/signin');
        },
        children: [
          {
            index: true,
            loader: async () => redirect('/app/budget'),
          },
          {
            path: 'budget',
            lazy: async () => import('../../budget-items/pages/overview'),
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
