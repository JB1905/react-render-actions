import React from 'react';
import { number } from '@storybook/addon-knobs';

import { If, Else, Then, When, Unless } from '../lib/react-render-actions.esm';

export default {
  title: 'Condition',
};

export const ifElse = () => (
  <If condition={number('condition', 10 > 9)}>
    <Then>
      <p>Done</p>
    </Then>

    <Else>
      <p>Else</p>
    </Else>
  </If>
);

export const when = () => (
  <When condition={number('condition', 10 > 9)}>
    <p>Done</p>
  </When>
);

export const unless = () => (
  <Unless condition={number('condition', 10 > 9)}>
    <p>Done</p>
  </Unless>
);
