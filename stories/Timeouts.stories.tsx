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
  >
    <p>Hello World!</p>
  </SetTimeout>
);

export const setInterval = () => (
  <SetInterval
    timeout={1000}
    enabled={boolean('enabled', true)}
    onInterval={action(`onInterval`)}
  >
    {(timeout: number) => <p>{timeout}</p>}
  </SetInterval>
);
