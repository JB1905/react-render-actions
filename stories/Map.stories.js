import React from 'react';

import { Map } from '../lib/react-render-actions.esm';

export default {
  title: 'Map',
  component: Map
};

export const normal = () => <Map data={[1, 2, 3]}>{item => <p>{item}</p>}</Map>;
