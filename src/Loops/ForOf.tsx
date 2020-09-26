import React from 'react';

interface Props<T> {
  children: (value: T) => JSX.Element;
  data: T[];
}

export function ForOf<T>({ children, data }: Props<T>) {
  const results = [];

  for (let value of data) {
    results.push(children(value));
  }

  return <>{results}</>;
}
