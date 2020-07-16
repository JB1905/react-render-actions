import React from 'react';

interface Props<T> {
  readonly data: T[];
  readonly children: (value: T, index: number, array: T[]) => JSX.Element;
}

export function Map<T>({ data, children }: Props<T>) {
  return <>{data.map(children)}</>;
}
