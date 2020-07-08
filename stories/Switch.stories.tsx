import React from 'react';

import { Switch, Case, Default } from '../src';

export default {
  title: 'Switch',
};

export const normal = () => (
  <Switch switchValue="apple">
    <Case case="banana">
      <p>Banana</p>
    </Case>

    <Case case="apple">
      <p>Apple</p>
    </Case>

    <Default>
      <p>Fruit not found :(</p>
    </Default>
  </Switch>
);
