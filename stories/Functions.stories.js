import React from 'react';

import { Map, Filter, Reduce } from '../lib/react-render-actions.esm';

export default {
  title: 'Functions'
};

export const map = () => <Map data={[1, 2, 3]}>{item => <p>{item}</p>}</Map>;

export const filter = () => (
  <Filter
    data={[1, 2, 3]}
    // data={array('Data', [1, 2, 3])}
    pattern={item => item !== 1}
  >
    {filtered => <Map data={filtered}>{item => <p>{item}</p>}</Map>}
  </Filter>
);

export const reduce = () => (
  <Reduce data={[1, 2, 3]} pattern={(prev, next) => prev + next}>
    {reduced => reduced}
  </Reduce>
);
