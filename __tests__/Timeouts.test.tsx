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
