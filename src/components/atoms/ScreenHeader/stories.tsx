import React from 'react';

import { storiesOf } from '@storybook/react';

import { ScreenHeader } from '.';

storiesOf('atoms/ScreenHeader', module)
  // .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with english text', () => <ScreenHeader title="HOME" />)
  .add('with japanese text', () => <ScreenHeader title="ホーム" />);
