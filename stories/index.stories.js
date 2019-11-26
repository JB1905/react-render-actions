import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {
  withKnobs,
  text,
  boolean,
  number,
  radios
} from '@storybook/addon-knobs'

import {
  If,
  Else,
  SetTimeout,
  SetInterval,
  Switch,
  Then
} from '../lib/react-render-actions'

const stories = storiesOf('ReactRenderActions', module)

stories.addDecorator(withKnobs)

stories
  .add('If', () => (
    <If condition={10 > 9}>
      <Then>
        <p>Hello World</p>
      </Then>
    </If>
  ))
  .add('SetTimeout', () => (
    <SetTimeout timeout={1000}>
      <p>Hello</p>
    </SetTimeout>
  ))
// .add('SetInterval', () => <SetInterval interval={1000} />);
// .add('Słycz', () => (
//   <Switch timeout={}>
//     <p>Hello</p>
//   </Switch>
// ))
