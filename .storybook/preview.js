// .storybook/preview.js

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import GlobalProvider from '../src/hooks/global/Provider';
import { AuthHooksContext } from '../src/hooks/auth';
import { TodoHooksContext } from '../src/hooks/todo';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  Story => (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: {
              retry: 0,
              suspense: true,
            },
          },
        })
      }>
      <Story />
    </QueryClientProvider>
  ),
  Story => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  Story => (
    <GlobalProvider value={{ useCurrentUser: { currentUser: undefined } }}>
      <AuthHooksContext.Provider
        value={{
          useLogin: () => ({ login: () => {} }),
          useLogout: () => ({ logout: () => {} }),
        }}>
        <TodoHooksContext.Provider
          value={{
            useFetchTodos: () => ({
              fetchTodos: () => [],
            }),
          }}>
          <Story />
        </TodoHooksContext.Provider>
      </AuthHooksContext.Provider>
    </GlobalProvider>
  ),
];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }