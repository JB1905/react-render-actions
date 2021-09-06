interface Props<T> {
  readonly data: T[];
  readonly children: (reducedValue: T) => JSX.Element;
  readonly pattern: (
    previousValue: T,
    currentValue: T,
    currentIndex: number,
    array: T[]
  ) => T;
}

export const Reduce = <T>({ data, children, pattern }: Props<T>) => {
  return children(data.reduce(pattern));
};
