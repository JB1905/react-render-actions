import React from 'react';
import { render, findByText } from '@testing-library/react';

import { SetTimeout, SetInterval } from '../src';

describe('SetTimeout', () => {
  it('should render content after timeout', async () => {
    const { container } = render(
      <SetTimeout enabled timeout={4000}>
        <p>Hello</p>
      </SetTimeout>
    );

    expect(await findByText(container, 'Hello')).toBeDefined();
  });
});

describe('SetInterval', () => {
  it('should display final result', async () => {
    const { container } = render(
      <SetInterval enabled initialCounter={0} timeout={2000}>
        {(i: number) => <p>{i}</p>}
      </SetInterval>
    );

    expect(await findByText(container, '5')).toBeDefined();
  });
});
