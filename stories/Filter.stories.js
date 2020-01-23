import React from 'react';

import { Filter, Map } from '../lib/react-render-actions.esm';

export default {
  title: 'Filter',
  component: Filter
};

export const normal = () => (
  <Filter data={[1, 2, 3]} pattern={item => item !== 1}>
    {filtered => <Map data={filtered}>{item => <p>{item}</p>}</Map>}
  </Filter>
);
