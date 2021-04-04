import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { SetTimeout, SetInterval } from '../src';

describe('SetTimeout', () => {
  const TIMEOUT = 4000;

  it('should render content after timeout', async () => {
    const onEnabled = jest.fn();
    const onDisabled = jest.fn();
    const onTimeout = jest.fn();

    const { container, getByText } = render(
      <SetTimeout
        enabled
        timeout={TIMEOUT}
        onEnabled={onEnabled}
        onTimeout={onTimeout}
      >
        <p>Hello World!</p>
      </SetTimeout>
    );

    await waitFor(
      () => {
        expect(getByText('Hello World!')).toBeDefined();

        expect(onEnabled).toHaveBeenCalled();
        expect(onDisabled).not.toHaveBeenCalled();
        expect(onTimeout).toHaveBeenCalledTimes(1);
      },
      {
        timeout: TIMEOUT,
      }
    );

    expect(container).toMatchSnapshot();
  });

  it('should not render content after timeout when timer is not enabled', async () => {
    const onEnabled = jest.fn();
    const onDisabled = jest.fn();
    const onTimeout = jest.fn();

    const { container } = render(
      <SetTimeout timeout={TIMEOUT} onTimeout={onTimeout}>
        <p>Hello World!</p>
      </SetTimeout>
    );

    await waitFor(
      () => {
        expect(onEnabled).not.toHaveBeenCalled();
        expect(onDisabled).toHaveBeenCalled();
        expect(onTimeout).toHaveBeenCalledTimes(0);
      },
      {
        timeout: TIMEOUT,
      }
    );

    expect(container).toMatchSnapshot();
  });
});

describe('SetInterval', () => {
  it.skip('should', () => {
    // const { container } = render(
    //   <SetInterval>
    //     <p>Hello World!</p>
    //   </SetInterval>
    // );
  });
});
