import React from 'react';
import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SetTimeout, SetInterval } from '../src';

export default {
  title: 'Timeouts',
  subcomponents: { SetTimeout, SetInterval },
} as Meta;

interface SetTimeoutProps {
  readonly timeout: number;
  readonly enabled: boolean;
}

export const setTimeout: Story<SetTimeoutProps> = (args) => (
  <SetTimeout {...args} onTimeout={action('onTimeout')}>
    <p>Hello World!</p>
  </SetTimeout>
);

setTimeout.args = {
  timeout: 1000,
  enabled: false,
};

interface SetIntervalProps {
  readonly paused: boolean;
}

export const setInterval: Story<SetIntervalProps> = (args) => (
  <SetInterval interval={1000} {...args} onInterval={action('onInterval')}>
    {(interval) => <p>{interval}</p>}
  </SetInterval>
);

setInterval.args = {
  paused: false,
};
