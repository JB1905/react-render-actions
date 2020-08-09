import React from 'react';

interface Props<T> {
  children: (value: T, index: number, array: T[]) => JSX.Element;
  data: T[];
}

export function ForEach<T>({ children, data }: Props<T>) {
  return <>{data.forEach(children)}</>;
}
