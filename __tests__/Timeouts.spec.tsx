import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { SetTimeout, SetInterval } from '../src';

describe('SetTimeout', () => {
  it('should render content after timeout', async () => {
    const TIMEOUT = 4000;

    const { getByText } = render(
      <SetTimeout enabled timeout={TIMEOUT}>
        <p>Hello</p>
      </SetTimeout>
    );

    await waitFor(() => expect(getByText('Hello')).toBeDefined(), {
      timeout: TIMEOUT,
    });
  });
});

// describe('SetInterval', () => {
//   it('should display final result', async () => {
//     const { getByText } = render(
//       <SetInterval enabled initialCounter={0} timeout={2000}>
//         {(i: number) => <p>{i}</p>}
//       </SetInterval>
//     );

//     await waitFor(() => expect(getByText('2')).toBeDefined(), {
//       timeout: 4000,
//     });
//   });
// });
