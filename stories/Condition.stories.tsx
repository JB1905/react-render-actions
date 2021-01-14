import React from 'react';
import { Meta, Story } from '@storybook/react';

import { If, Else, Then, When, Unless } from '../src';

interface Props {
  readonly condition: boolean;
}

export default {
  title: 'Condition',
  subcomponents: { If, Else, Then, When, Unless },
  args: {
    condition: true,
  },
} as Meta;

export const ifElse: Story<Props> = (args) => (
  <If {...args}>
    <Then>
      <p>True</p>
    </Then>

    <Else>
      <p>False</p>
    </Else>
  </If>
);

export const when: Story<Props> = (args) => (
  <When {...args}>
    <p>True</p>
  </When>
);

export const unless: Story<Props> = (args) => (
  <Unless {...args}>
    <p>False</p>
  </Unless>
);

unless.args = {
  condition: false,
};
