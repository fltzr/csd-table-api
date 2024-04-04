import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('../common/components/layout'),
    children: [
      {
        path: '/table',
        lazy: () => import('../pages/table'),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
