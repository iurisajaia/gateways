import React, { Suspense } from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import { queryClient } from "./configs/queryClient";

import App from "./App";

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
  document.getElementById("root")
);
