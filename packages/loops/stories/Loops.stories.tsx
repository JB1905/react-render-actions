import React from 'react';

import { For, ForIn, ForOf, While, DoWhile, ForEach, Break } from '../src';

export default {
  title: 'Loop',
};

// export const forLoop = () => (
//   <For start={0} comparator={(i) => i < 10} next={(i) => i + 1}>
//     {/* {(value: any) => (
//       <> */}
//     <p>Hello</p>
//     <p>Hello</p>
//     <p>Hello</p>

//     {/* {index === 5 && <Break />} */}
//     {/* </> */}
//     {/* )} */}
//   </For>
// );

export const forIn = () => {
  const data = {
    name: 'John',
    age: '21',
    email: 'john@example.com',
  };

  return (
    <ForIn data={data}>
      {(value) => <p>{/* {value}: {data[value]} */}</p>}
    </ForIn>
  );
};

export const forOf = () => (
  <ForOf data={[1, 2, 3]}>{(value) => <p>{value}</p>}</ForOf>
);

export const forEach = () => (
  <ForEach data={[1, 2, 3]}>{(item) => <p>{item}</p>}</ForEach>
);

export const whileLoop = () => {
  return (
    <While test={2 > 1}>
      <p>Hello</p>
    </While>
  );
};

export const doWhile = () => {
  return (
    <DoWhile test={2 > 1}>
      <p>Hello</p>
    </DoWhile>
  );
};
