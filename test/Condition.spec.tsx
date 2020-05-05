import React from 'react';
import { render } from '@testing-library/react';

import { If, Else, Then, When, Unless } from '../src';

describe('If-Else', () => {
  it('should', () => {
    const condition = 2 + 2 === 4;

    const { getByText } = render(
      <If condition={condition}>
        <Then>two plus two equals four</Then>

        <Else>fail</Else>
      </If>
    );

    expect(getByText('two plus two equals four')).toBeDefined();
    // expect(getByText('fail')).not.toBeDefined();
  });

  // it('should', () => {
  //   const condition = 2 + 2 === 4;

  //   const { getByText } = render(
  //     <If condition={condition}>
  //       <Then>two plus two equals four</Then>
  //     </If>
  //   );

  //   expect(getByText('two plus two equals four')).toBeDefined();
  // });
});

describe('When', () => {
  it('should', () => {
    const condition = 2 + 2 === 4;

    const { getByText } = render(
      <When condition={condition}>
        <p>two plus two equals four</p>
      </When>
    );

    expect(getByText('two plus two equals four')).toBeDefined();
  });
});

describe('Unless', () => {
  it('should', () => {
    const condition = 2 + 2 === 5;

    const { getByText } = render(
      <Unless condition={condition}>
        <p>two plus two not equals five</p>
      </Unless>
    );

    expect(getByText('two plus two not equals five')).toBeDefined();
  });
});
