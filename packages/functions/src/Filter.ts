interface Props<T> {
  readonly data: T[];
  readonly children: (filteredData: T[]) => JSX.Element;
  readonly pattern: (value: T, index: number, array: T[]) => unknown;
}

export const Filter = <T>({ data, children, pattern }: Props<T>) => {
  return children(data.filter(pattern));
};
