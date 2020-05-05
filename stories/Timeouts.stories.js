import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';

import { SetTimeout, SetInterval } from '../lib/react-render-actions.esm';

export default {
  title: 'Timeouts',
};

export const setTimeout = () => (
  <SetTimeout
    timeout={number('timeout', 1000)}
    enabled={boolean('enabled', false)}
  >
    <p>Hello</p>
  </SetTimeout>
);

export const setInterval = () => (
  <SetInterval timeout={1000}>{(timeout) => <p>{timeout}</p>}</SetInterval>
);
