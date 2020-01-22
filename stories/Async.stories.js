import React from 'react';

import {
  Async,
  Await,
  Try,
  Catch,
  Finally
} from '../lib/react-render-actions.esm';

export default {
  title: 'Async-Await',
  component: Async
};

export const normal = () => (
  <Async>
    <Try>
      <Await />

      <Catch></Catch>

      <Finally></Finally>
    </Try>
  </Async>
);
