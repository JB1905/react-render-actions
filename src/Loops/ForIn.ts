interface Props<T> {
  children: (value: T) => JSX.Element;
  data: Record<string, T>;
}

export const ForIn = <T>({ children, data }: Props<T>) => {
  const results = [];

  for (const item in data) {
    // if (data.hasOwnProperty(item)) {
    results.push(children);
    // results.push(children(item));
    // }
  }

  return results;
};
