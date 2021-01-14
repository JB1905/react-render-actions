import React from 'react';
import { render } from '@testing-library/react';

import { If, Else, Then, When, Unless } from '../src';

describe('If-Else', () => {
  it('should', () => {
    const condition = 2 + 2 === 4;

    const { container, getByText } = render(
      <If condition={condition}>
        <Then>two plus two equals four</Then>

        <Else>fail</Else>
      </If>
    );

    expect(container).toMatchSnapshot();

    expect(getByText('two plus two equals four')).toBeDefined();
  });
});

describe('When', () => {
  it('should', () => {
    const condition = 2 + 2 === 4;

    const { container, getByText } = render(
      <When condition={condition}>
        <p>two plus two equals four</p>
      </When>
    );

    expect(container).toMatchSnapshot();

    expect(getByText('two plus two equals four')).toBeDefined();
  });
});

describe('Unless', () => {
  it('should', () => {
    const condition = 2 + 2 === 5;

    const { container, getByText } = render(
      <Unless condition={condition}>
        <p>two plus two not equals five</p>
      </Unless>
    );

    expect(container).toMatchSnapshot();

    expect(getByText('two plus two not equals five')).toBeDefined();
  });
});
