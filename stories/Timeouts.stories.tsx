import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SetTimeout, SetInterval } from '../src';

export default {
  title: 'Timeouts',
};

export const setTimeout = () => (
  <SetTimeout
    timeout={number('timeout', 1000)}
    enabled={boolean('enabled', false)}
    onTimeout={action('onTimeout')}
    // onDone={action('onDone')}
    onEnabled={action('onEnabled')}
    onDisabled={action('onDisabled')}
    // onDestroy={action('onDestroy')}
  >
    <p>Hello World!</p>
  </SetTimeout>
);

export const setInterval = () => (
  <SetInterval
    interval={1000}
    paused={boolean('paused', false)}
    onInterval={action('onInterval')}
    onStart={action('onStart')}
    onPause={action('onPause')}
    // onDestroy={action('onDestroy')}
  >
    {(interval) => <p>{interval}</p>}
  </SetInterval>
);
