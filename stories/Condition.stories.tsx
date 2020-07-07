import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';

import { If, Else, Then, When, Unless } from '../src';

export default {
  title: 'Condition',
};

export const ifElse = () => (
  <If condition={boolean('condition', 10 > 9)}>
    <Then>
      <p>Done</p>
    </Then>

    <Else>
      <p>Else</p>
    </Else>
  </If>
);

export const when = () => (
  <When condition={boolean('condition', 10 > 9)}>
    <p>Done</p>
  </When>
);

export const unless = () => (
  <Unless condition={boolean('condition', 10 > 9)}>
    <p>Done</p>
  </Unless>
);
