import React , { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback="loading...">
          <QueryClientProvider client={queryClient}>
              <Router>
                <App />
              </Router>
          </QueryClientProvider>
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

