import React from 'react';

import { Switch, Case, Default } from '../lib/react-render-actions.esm';

export default {
  title: 'Switch',
};

export const normal = () => (
  <Switch switchValue="apple">
    <Case case="banana">
      <p>Hello</p>
    </Case>

    <Case case="apple">
      <p>Hello</p>
    </Case>

    <Default>
      <p>Hello</p>
    </Default>
  </Switch>
);
