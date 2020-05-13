import React from 'react';
import { render } from '@testing-library/react';

import { RPromise, Resolve, Reject } from '../src';

describe('Promise', () => {
  const promise = new Promise((resolve, reject) => {
    resolve(true);
  });

  it('should', () => {
    const { container } = render(
      <RPromise promise={promise} type="any" fallback={<p>Loading...</p>}>
        <Resolve>{(data: any) => <>Resolved</>}</Resolve>

        <Reject>{(err: any) => <>Rejected</>}</Reject>
      </RPromise>
    );
  });
});
