import React from 'react';
import { render } from '@testing-library/react';

import { Switch, Case, Default } from '../src';

describe('Switch', () => {
  it('should', () => {
    const switchValue = 'banana';

    const { container } = render(
      <Switch switchValue={switchValue}>
        <Case case="apple">Apple</Case>
        <Case case="banana">Banana</Case>
        <Case case="pear">Pear</Case>
        <Case case="raspberry">Raspberry</Case>

        <Default>Fruit not found</Default>
      </Switch>
    );

    expect(container.firstChild).toBe(null);
  });
});
