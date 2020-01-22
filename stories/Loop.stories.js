import React from 'react';

import {
  For,
  ForIn,
  ForOf,
  While,
  DoWhile,
  ForEach
} from '../lib/react-render-actions.esm';

export default {
  title: 'Loop',
  component: For
};

export const normal = () => (
  <ForEach data={[1, 2, 3]}>{item => <p>{item}</p>}</ForEach>
);
