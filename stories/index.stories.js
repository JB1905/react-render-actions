import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  radios
} from '@storybook/addon-knobs';

import {
  If,
  Else,
  SetTimeout,
  SetInterval,
  Switch,
  Then,
  RPromise,
  Resolve,
  Reject
} from '../lib/react-render-actions';

const stories = storiesOf('ReactRenderActions', module);

stories.addDecorator(withKnobs);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

stories
  .add('If', () => (
    <If condition={10 > 9}>
      <Then>
        <p>Done</p>
      </Then>

      <Else>
        <p>Else</p>
      </Else>
    </If>
  ))
  .add('SetTimeout', () => (
    <SetTimeout timeout={1000}>
      <p>Hello</p>
    </SetTimeout>
  ))

  .add('Promise', () => (
    <RPromise promise={promise}>
      <Resolve>
        <p>Hello</p>
      </Resolve>
    </RPromise>
  ));
// .add('SetInterval', () => <SetInterval interval={1000} />);
// .add('Słycz', () => (
//   <Switch timeout={}>
//     <p>Hello</p>
//   </Switch>
// ))
