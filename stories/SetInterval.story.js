import React from 'react';
import { number } from '@storybook/addon-knobs';

import { SetInterval } from '../lib/react-render-actions.esm';

export default {
  title: 'SetInterval',
  component: SetInterval
};

export const normal = () => (
  <SetInterval timeout={1000}>{timeout => <p>{timeout}</p>}</SetInterval>
);
