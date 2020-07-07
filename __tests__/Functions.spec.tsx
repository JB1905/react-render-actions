import React from 'react';
import { render, getAllByTestId } from '@testing-library/react';

import { Map, Filter, Reduce } from '../src';

const bands = [
  { name: 'The Killers' },
  { name: 'Green Day' },
  { name: 'The Offspring' },
  { name: 'Sum 41' },
  { name: 'Blink 182' },
  { name: 'U2' },
];

interface Output {
  name: string;
}

describe('Map', () => {
  it('should map provided values', () => {
    const { container, getByText, getAllByTestId } = render(
      <Map data={bands}>
        {({ name }: Output) => (
          <p data-testid="band-name" key={name}>
            {name}
          </p>
        )}
      </Map>
    );

    expect(container).toMatchSnapshot();

    bands.map(({ name }) => expect(getByText(name)).toBeDefined());

    expect(getAllByTestId('band-name').length).toBe(6);
  });
});

describe('Filter', () => {
  it('should filter provided values', () => {
    const { container, getByTestId } = render(
      <Filter data={bands} pattern={({ name }: Output) => name !== 'U2'}>
        {(filteredData: any) => (
          <p data-testid="result">{JSON.stringify(filteredData)}</p>
        )}
      </Filter>
    );

    expect(container).toMatchSnapshot();

    expect(getByTestId('result').innerHTML).toBe(
      JSON.stringify(bands.filter(({ name }) => name !== 'U2'))
    );

    expect(JSON.parse(getByTestId('result').innerHTML).length).toBe(5);
  });
});

describe('Reduce', () => {
  it('should reduce provided values', () => {
    const numbers = [1, 2, 3, 4, 5];

    const { container, getByTestId } = render(
      <Reduce
        data={numbers}
        pattern={(prev: number, next: number) => prev + next}
      >
        {(value: number) => <p data-testid="result">{value}</p>}
      </Reduce>
    );

    expect(container).toMatchSnapshot();

    expect(getByTestId('result').innerHTML).toBe('15');
  });
});
