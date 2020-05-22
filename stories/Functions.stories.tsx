import React from 'react';

import { Map, Filter, Reduce } from '../src';

export default {
  title: 'Functions',
};

export const map = () => (
  <Map data={[1, 2, 3]}>{(item: any) => <p>{item}</p>}</Map>
);

export const filter = () => (
  <Filter
    data={[1, 2, 3]}
    // data={array('Data', [1, 2, 3])}
    pattern={(item: any) => item !== 1}
  >
    {(filtered: any) => (
      <Map data={filtered}>{(item: any) => <p>{item}</p>}</Map>
    )}
  </Filter>
);

export const reduce = () => (
  <Reduce data={[1, 2, 3]} pattern={(prev: any, next: any) => prev + next}>
    {(reduced: any) => reduced}
  </Reduce>
);
