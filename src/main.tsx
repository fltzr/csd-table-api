import { StrictMode, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './common/router';

import './normalize.css';
import './index.scss';
import '@cloudscape-design/global-styles/index.css';

const container: HTMLElement | null = document.querySelector('#c');

if (container) {
  const Providers = lazy(() => import('./providers'));

  createRoot(container).render(
    <StrictMode>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </StrictMode>,
  );
}
