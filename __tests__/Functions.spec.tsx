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
    const pattern = ({ name }: Output) => name !== 'U2';

    const { container, getByTestId } = render(
      <Filter data={bands} pattern={pattern}>
        {(filteredData: Output[]) => (
          <p data-testid="result">{JSON.stringify(filteredData)}</p>
        )}
      </Filter>
    );

    expect(container).toMatchSnapshot();

    const resultContent = getByTestId('result').innerHTML;

    expect(resultContent).toBe(JSON.stringify(bands.filter(pattern)));

    expect(JSON.parse(resultContent).length).toBe(5);
  });
});

describe('Reduce', () => {
  it('should reduce provided values', () => {
    const data = [1, 2, 3, 4, 5];

    const pattern = (prev: number, next: number) => prev + next;

    const { container, getByTestId } = render(
      <Reduce data={data} pattern={pattern}>
        {(value: number) => <p data-testid="result">{value}</p>}
      </Reduce>
    );

    expect(container).toMatchSnapshot();

    expect(getByTestId('result').innerHTML).toBe(
      data.reduce(pattern).toString()
    );
  });
});
