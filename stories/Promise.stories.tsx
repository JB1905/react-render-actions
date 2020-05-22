import React from 'react';

import { RPromise, Resolve, Reject } from '../src';

export default {
  title: 'Promise',
};

// eslint-disable-next-line no-undef
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 400);
});

// export const normal = () => (
//   <RPromise promise={promise}>
//     <Resolve>
//       <p>helol</p>
//     </Resolve>

//     <Reject>aaaa</Reject>
//   </RPromise>
// );
