import React from 'react';

import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import Clock from './Clock';
import Close from './Close';
import Warning from './Warning';

const Container = styled.div`
  width: 100px;
`;

storiesOf('atoms/Icons', module)
  .add('clock', () => <Clock />)
  .add('close', () => <Close />)
  .add('width container', () => (
    <Container>
      <Warning width="100%" height="100%" />
    </Container>
  ))
  .add('100x100', () => <Warning width="100px" height="100px" />);
