import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Switch, Case, Default } from '../src';

export default {
  title: 'Switch',
  // component: Switch,
  // subcomponents: { Case, Default },
  args: {
    value: 'apple',
    cases: [
      {
        case: 'banana',
        text: 'Banana',
      },
      {
        case: 'apple',
        text: 'Apple',
      },
    ],
  },
} as Meta;

export const normal: Story = ({ value, cases }) => (
  <Switch switchValue={value}>
    {/* {cases.map(case => (
      <Case case={case}>
        <p>{text}</p>
      </Case>
      ))} */}

    {/* {cases.map((case) => <p>{text}</p>)} */}

    <Default>
      <p>Fruit not found :(</p>
    </Default>
  </Switch>
);
