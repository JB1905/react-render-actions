import React from 'react';
import { render } from '@testing-library/react';

import {
  For,
  ForEach,
  ForOf,
  ForIn,
  While,
  DoWhile,
  Break,
  Continue,
} from '../../../src';

describe('For', () => {
  it('should', () => {
    const { container } = render(
      <For start={1} comparator={(a: any) => a < 10} next={(a: any) => a++}>
        {(i: any) => null}
      </For>
    );

    expect(container.firstChild).toBe(null);
  });
});

describe('ForEach', () => {
  it('should', () => {
    const { container } = render(
      <ForEach data={[1, 2, 3, 4]}>{(item: any) => <p>{item}</p>}</ForEach>
    );

    expect(container.firstChild).toBe(null);
  });
});

describe('ForOf', () => {
  it('should', () => {
    const { container } = render(
      <ForOf data={[1, 2, 3, 4]}>{(i: any) => <p>{i}</p>}</ForOf>
    );

    expect(container.firstChild).toBe(null);
  });
});

describe('ForIn', () => {
  it('should', () => {
    const { container } = render(
      <ForIn data={[1, 2, 3, 4]}>{(i: any) => <p>{i}</p>}</ForIn>
    );

    expect(container.firstChild).toBe(null);
  });
});

describe('While', () => {
  it('should', () => {
    const { container } = render(
      <While test={2 < 4}>{(i: any) => <p>{i}</p>}</While>
    );

    expect(container.firstChild).toBe(null);
  });
});

describe('DoWhile', () => {
  it('should', () => {
    const { container } = render(
      <DoWhile test={2 < 4}>{(i: any) => <p>{i}</p>}</DoWhile>
    );

    expect(container.firstChild).toBe(null);
  });
});
