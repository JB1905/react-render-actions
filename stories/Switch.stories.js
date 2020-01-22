import React from 'react';

import { Switch, Case, Default } from '../lib/react-render-actions.esm';

export default {
  title: 'Switch',
  component: Switch
};

export const normal = () => (
  <Switch switchValue="apple">
    <Case>
      <p>Hello</p>
    </Case>

    <Case>
      <p>Hello</p>
    </Case>

    <Default>
      <p>Hello</p>
    </Default>
  </Switch>
);
