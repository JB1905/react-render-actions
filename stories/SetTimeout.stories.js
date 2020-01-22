import React from 'react';
import { number } from '@storybook/addon-knobs';

import { SetTimeout } from '../lib/react-render-actions.esm';

export default {
  title: 'SetTimeout',
  component: SetTimeout
};

export const normal = () => (
  <SetTimeout timeout={number('timeout', 1000)}>
    <p>Hello</p>
  </SetTimeout>
);
