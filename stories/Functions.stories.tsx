import React from 'react';

import { Map, Filter, Reduce } from '../src';

export default {
  title: 'Functions',
};

export const map = () => (
  <Map data={[1, 2, 3]}>{(item, index) => <p key={index}>{item}</p>}</Map>
);

export const filter = () => (
  <Filter data={[1, 2, 3]} pattern={(item) => item !== 1}>
    {(filtered) => (
      <Map data={filtered}>{(item, index) => <p key={index}>{item}</p>}</Map>
    )}
  </Filter>
);

export const reduce = () => (
  <Reduce data={[1, 2, 3]} pattern={(prev, next) => prev + next}>
    {(reducedValue) => <p>{reducedValue}</p>}
  </Reduce>
);
