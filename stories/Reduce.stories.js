import React from 'react';

import { Reduce } from '../lib/react-render-actions.esm';

export default {
  title: 'Reduce',
  component: Reduce
};

export const normal = () => (
  <Reduce data={[1, 2, 3]} pattern={(prev, next) => prev + next}>
    {reduced => reduced}
  </Reduce>
);
