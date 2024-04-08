import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './common/router/router';

import './normalize.css';
import './index.scss';
import '@cloudscape-design/global-styles/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import I18nProvider from '@cloudscape-design/components/i18n';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import messages from '@cloudscape-design/components/i18n/messages/all.en';

import { Loader } from './common/components/loader';

const container: HTMLElement | null = document.querySelector('#c');

if (container) {
  const queryClient = new QueryClient();

  createRoot(container).render(
    <StrictMode>
      <Suspense fallback={<Loader />}>
        <QueryClientProvider client={queryClient}>
          <I18nProvider locale='en' messages={[messages]}>
            <RouterProvider router={router} fallbackElement={<Loader />} />
          </I18nProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Suspense>
    </StrictMode>,
  );
}
