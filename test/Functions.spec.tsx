import React from 'react';
import { render } from '@testing-library/react';

import { Map, Filter, Reduce } from '../src';

const bands = [
  { name: 'The Killers' },
  { name: 'Green Day' },
  { name: 'The Offspring' },
  { name: 'Sum 41' },
  { name: 'Angels & Airwaves' },
  { name: 'Blink 182' },
  { name: 'U2' },
];

describe('Map', () => {
  it('should', () => {
    const { getByText } = render(
      <Map data={bands}>{({ name }: any) => <p key={name}>{name}</p>}</Map>
    );

    expect(getByText('The Killers')).toBeDefined();
  });
});

describe('Filter', () => {
  it('should', () => {
    const { getByText } = render(
      <Filter data={bands} pattern={({ name }: any) => name !== 'U2'}>
        {({ name }: any) => <p key={name}>{name}</p>}
      </Filter>
    );

    expect(getByText('U2')).not.toBeDefined();
  });
});

describe('Reduce', () => {
  it('should', () => {
    const numbers = [1, 2, 3, 4, 5];

    const { container } = render(
      <Reduce data={numbers} pattern={(numbers: any) => numbers}>
        {({ name }: any) => <p key={name}>{name}</p>}
      </Reduce>
    );

    expect(container.firstChild).toBe(true);
  });
});
