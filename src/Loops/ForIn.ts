interface Props<T> {
  children: (value: T) => JSX.Element;
  data: Record<string, T>;
}

export const ForIn = <T>({ children, data }: Props<T>) => {
  for (let value in data) {
    // return children(value);
  }
};
