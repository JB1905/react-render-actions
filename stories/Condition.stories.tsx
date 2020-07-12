import React from 'react';
import { boolean } from '@storybook/addon-knobs';

import { If, Else, Then, When, Unless } from '../src';

export default {
  title: 'Condition',
};

export const ifElse = () => (
  <If condition={boolean('condition', true)}>
    <Then>
      <p>True</p>
    </Then>

    <Else>
      <p>False</p>
    </Else>
  </If>
);

export const when = () => (
  <When condition={boolean('condition', true)}>
    <p>True</p>
  </When>
);

export const unless = () => (
  <Unless condition={boolean('condition', false)}>
    <p>False</p>
  </Unless>
);
