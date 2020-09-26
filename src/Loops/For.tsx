import React from 'react';

// import { Break } from './Break';
// import { Continue } from './Continue';

interface Props {
  children: (value: number) => JSX.Element;
  start: number;
  comparator: (i: number) => boolean;
  next: (i: number) => any;
}

export const For = ({ children, start, comparator, next }: Props) => {
  const results = [];

  for (let i = start; comparator(i); i = next(i)) {
    // if (children.find((child) => child.type === Break)) {
    //   break;
    // } else if (children.find((child) => child.type === Continue)) {
    //   continue;
    // }

    results.push(children(i));
  }

  return <>{results}</>;
};
