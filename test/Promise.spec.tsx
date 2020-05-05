import React from 'react';
import { render } from '@testing-library/react';

import { RPromise, Resolve, Reject } from '../src';

describe('Promise', () => {
  it('should', () => {
    const { container } = render(
      <RPromise promise={} type="any" fallback={<p>Loading...</p>}>
        <Resolve>Resolved</Resolve>

        <Reject>Rejected</Reject>
      </RPromise>
    );
  });
});
