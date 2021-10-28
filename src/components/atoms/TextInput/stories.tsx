import React from 'react';

import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { TextInput } from '.';

const Container = styled.div`
  display: inline-block;
  width: 100px;
`;

storiesOf('atoms/TextInput', module)
  .add('text input', () => <TextInput placeholder="Employee Number" />)
  .add('password', () => <TextInput placeholder="Password" type="password" />)
  .add('japanese placeholder', () => <TextInput placeholder="ログイン" />)
  .add('with container', () => (
    <Container>
      <TextInput placeholder="ログイン" />
    </Container>
  ));
