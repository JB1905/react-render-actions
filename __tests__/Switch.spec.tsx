import React from 'react';
import { render } from '@testing-library/react';

import { Switch, Case, Default } from '../src';

describe('Switch', () => {
  it.each([
    ['banana', 'Banana'],
    ['cherry', 'Fruit not found'],
  ])('should return $result for $switchValue', (switchValue, result) => {
    const { container, getByText } = render(
      <Switch switchValue={switchValue}>
        <Case case="apple">Apple</Case>
        <Case case="banana">Banana</Case>
        <Case case="pear">Pear</Case>
        <Case case="raspberry">Raspberry</Case>

        <Default>Fruit not found</Default>
      </Switch>
    );

    expect(container).toMatchSnapshot();

    expect(getByText(result)).toBeDefined();
  });

  it('should return neither case nor default', () => {
    const { container } = render(
      <Switch switchValue="pineapple">
        <Case case="apple">Apple</Case>
        <Case case="pear">Pear</Case>
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });

  it('should return first case matching switchValue', () => {
    const { container } = render(
      <Switch switchValue="apple">
        <Case case="apple">Apple 1</Case>
        <Case case="pear">Pear</Case>
        <Case case="apple">Apple 2</Case>
        <Case case="apple">Apple 3</Case>
        <Case case="banana">Banana</Case>
      </Switch>
    );

    expect(container).toMatchSnapshot();
  });
});
