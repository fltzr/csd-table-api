import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { Providers } from './providers';
import { router } from './common/router';

import '@cloudscape-design/global-styles/index.css';
import './index.css';
import './normalize.css';

const container: HTMLElement | null = document.querySelector('#root');

if (container) {
  createRoot(container).render(
    <StrictMode>
      <Providers>
        <RouterProvider router={router} />
      </Providers>
    </StrictMode>,
  );
}
