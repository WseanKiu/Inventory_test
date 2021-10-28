import React from 'react';

import { storiesOf } from '@storybook/react';

import styled from 'styled-components';

import { Button } from '.';

const onPress = (): void => {};

const Container = styled.div`
  display: inline-block;
  width: 100px;
`;

storiesOf('atoms/Button', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('button', () => (
    <>
      <Button onPress={onPress} title="Primary" />
      <Button onPress={onPress} title="Secondary" theme="secondary" />
      <Button onPress={onPress} title="Light" theme="light" />
    </>
  ))
  .add('disabled', () => <Button onPress={onPress} title="Start" disabled />)
  .add('with japanese chars', () => (
    <Button onPress={onPress} title="ログイン" />
  ))
  .add('with container', () => (
    <Container>
      <Button onPress={onPress} title="button" />
    </Container>
  ))
  .add('inline', () => (
    <>
      <Container>
        <Button onPress={onPress} title="Primary" />
      </Container>
      <Container>
        <Button onPress={onPress} title="Secondary" theme="secondary" />
      </Container>
      <Container>
        <Button onPress={onPress} title="Light" theme="light" />
      </Container>
    </>
  ));
