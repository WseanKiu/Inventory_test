import React from 'react';

import { storiesOf } from '@storybook/react';

import GlobalProvider from '../../../hooks/global/Provider';

import { Login } from '.';

storiesOf('templates/LoginTemplate', module)
  .addDecorator(story => (
    <GlobalProvider
      value={{
        useCurrentUser: {
          currentUser: undefined,
          setCurrentUser: () => {},
        },
      }}>
      {story()}
    </GlobalProvider>
  ))
  .add('login template', () => (
    <Login
      loginError=""
      login={(values): void => alert(JSON.stringify(values))}
    />
  ));
