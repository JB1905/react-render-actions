import React from 'react';

import { Map, Filter, Reduce } from '../src';

export default {
  title: 'Functions',
};

export const map = () => (
  <Map data={[1, 2, 3]}>{(item: number[]) => <p>{item}</p>}</Map>
);

export const filter = () => (
  <Filter data={[1, 2, 3]} pattern={(item: number) => item !== 1}>
    {(filtered: number[]) => (
      <Map data={filtered}>{(item: number) => <p>{item}</p>}</Map>
    )}
  </Filter>
);

export const reduce = () => (
  <Reduce
    data={[1, 2, 3]}
    pattern={(prev: number, next: number) => prev + next}
  >
    {(reduced: number) => reduced}
  </Reduce>
);
