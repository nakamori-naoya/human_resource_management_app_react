import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CookiesProvider } from 'react-cookie';
import { RecoilRoot } from 'recoil';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
    mutations: { retry: 0 },
  },
});

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { worker } = await import('./mocks/browser');
    worker.start();
  })();
}

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
      <CookiesProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
