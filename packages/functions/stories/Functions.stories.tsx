import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Map, Filter, Reduce } from '../../../src';

interface Props {
  readonly data: number[];
}

export default {
  title: 'Functions',
  // subcomponents: { Map, Filter, Reduce },
  args: {
    data: [1, 2, 3],
  },
} as Meta;

export const map: Story<Props> = (args) => (
  <Map {...args}>{(item, index) => <p key={index}>{item}</p>}</Map>
);

export const filter: Story<Props> = (args) => (
  <Filter {...args} pattern={(item) => item !== 1}>
    {(filtered) => (
      <Map data={filtered}>{(item, index) => <p key={index}>{item}</p>}</Map>
    )}
  </Filter>
);

filter.args = {
  // pattern: (item) => item !== 1,
};

export const reduce: Story<Props> = (args) => (
  <Reduce {...args} pattern={(prev, next) => prev + next}>
    {(reducedValue) => <p>{reducedValue}</p>}
  </Reduce>
);

reduce.args = {
  // pattern: (prev, next) => prev + next,
};
