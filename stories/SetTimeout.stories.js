import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';

import { SetTimeout } from '../lib/react-render-actions.esm';

export default {
  title: 'SetTimeout',
  component: SetTimeout
};

export const normal = () => (
  <SetTimeout
    timeout={number('timeout', 1000)}
    enabled={boolean('enabled', false)}
  >
    <p>Hello</p>
  </SetTimeout>
);
