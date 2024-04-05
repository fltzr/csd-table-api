import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('../common/components/layout'),
    children: [
      {
        path: '/table',
        lazy: () => import('../budget-items/pages/overview'),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
