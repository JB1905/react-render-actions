import React from 'react';
import { render } from '@testing-library/react';

import { Async, Await, Try, Catch, Finally } from '../src';

describe('Async-Await', () => {
  it('should', () => {
    const { container } = render(
      <Async>
        <Try>
          <Await>Success!</Await>
        </Try>

        <Catch>Failure!</Catch>

        <Finally>Finished!</Finally>
      </Async>
    );

    expect(container.firstChild).toBe(true);
  });
});
