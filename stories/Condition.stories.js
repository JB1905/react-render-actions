import React from 'react';
import { number } from '@storybook/addon-knobs';

import { If, Else, Then } from '../lib/react-render-actions.esm';

export default {
  title: 'Condition',
  component: If
};

export const normal = () => (
  <If condition={number('condition', 10 > 9)}>
    <Then>
      <p>Done</p>
    </Then>

    <Else>
      <p>Else</p>
    </Else>
  </If>
);
