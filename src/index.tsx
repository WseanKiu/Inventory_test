import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import RootNavigator from './navigators/root/RootNavigator';
import reportWebVitals from './reportWebVitals';

import Hooks from './hooks';

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider
      client={new QueryClient()}>
      <Hooks>
        <RootNavigator />
      </Hooks>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
