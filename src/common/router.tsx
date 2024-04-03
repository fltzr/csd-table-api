import { RouteObject, createBrowserRouter } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('../App'),
  },
];

export const router = createBrowserRouter(routes);
