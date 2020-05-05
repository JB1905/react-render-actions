import React from 'react';

import {
  Async,
  Await,
  Try,
  Catch,
  Finally,
} from '../lib/react-render-actions.esm';

export default {
  title: 'Async',
};

export const normal = () => (
  <Async>
    <Try>
      <Await />
    </Try>

    <Catch>{(error) => <p>{error}</p>}</Catch>

    <Finally>
      <p>Finally</p>
    </Finally>
  </Async>
);
