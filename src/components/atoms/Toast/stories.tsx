import React from 'react';

import { storiesOf } from '@storybook/react';

import { Toast } from '.';

storiesOf('atoms/Toast', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with english text', () => <Toast title="Incorrect ID or password" />)
  .add('with japanese text', () => (
    <Toast title="社員番号またはパスワードに誤りがあります" />
  ));
