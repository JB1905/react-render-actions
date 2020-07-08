import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { SetTimeout, SetInterval } from '../src';

describe('SetTimeout', () => {
  const TIMEOUT = 4000;

  it('should render content after timeout', async () => {
    const onTimeout = jest.fn();

    const { container, getByText } = render(
      <SetTimeout enabled timeout={TIMEOUT} onTimeout={onTimeout}>
        <p>Hello World!</p>
      </SetTimeout>
    );

    await waitFor(
      () => {
        expect(getByText('Hello World!')).toBeDefined();

        expect(onTimeout).toHaveBeenCalledTimes(1);
      },
      {
        timeout: TIMEOUT,
      }
    );

    expect(container).toMatchSnapshot();
  });

  it('should not render content after timeout when timer is not enabled', async () => {
    const onTimeout = jest.fn();

    const { container } = render(
      <SetTimeout timeout={TIMEOUT} onTimeout={onTimeout}>
        <p>Hello World!</p>
      </SetTimeout>
    );

    await waitFor(() => expect(onTimeout).toHaveBeenCalledTimes(0), {
      timeout: TIMEOUT,
    });

    expect(container).toMatchSnapshot();
  });
});

// describe('SetInterval', () => {
// it('should display final result', async () => {
//   const onInterval = jest.fn();
//   const { getByText } = render(
//     <SetInterval initialCounter={0} interval={2000} onInterval={onInterval}>
//       {(i) => <p>{i}</p>}
//     </SetInterval>
//   );
//   await waitFor(() => expect(getByText('2')).toBeDefined(), {
//     timeout: 4000,
//     interval: 2000,
//   });
//   expect(onInterval).toHaveBeenCalledTimes(2);
//   expect(onInterval).toHaveBeenCalledWith([1, 2]);
// });
// it('should ', async () => {
//   const onInterval = jest.fn();
//   const { getByText } = render(
//     <SetInterval initialCounter={2} interval={1000}>
//       {(i) => <p>{i}</p>}
//     </SetInterval>
//   );
//   expect(onInterval).toHaveBeenCalledTimes(0);
// });
// it('should ', async () => {
//   const onInterval = jest.fn();
//   const { getByText } = render(
//     <SetInterval initialCounter={0} interval={2000}>
//       {(i) => <p>{i}</p>}
//     </SetInterval>
//   );
//   expect(onInterval).toHaveBeenCalledTimes(0);
// });
// });
