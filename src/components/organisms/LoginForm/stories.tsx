import React from 'react';

import { storiesOf } from '@storybook/react';

import { LoginForm } from '.';

storiesOf('organisms/LoginForm', module).add('login form', () => (
  <LoginForm
    employeeNumber="sample_employee_number"
    password="password123"
    onChangeEmployeeNumber={(value): void => alert(value)}
    onChangePassword={(value): void => alert(value)}
    onClickLogin={(): void => {}}
  />
));
