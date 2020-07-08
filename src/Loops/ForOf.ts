interface Props<T> {
  children: (value: T) => JSX.Element;
  data: T[];
}

export const ForOf = <T>({ children, data }: Props<T>) => {
  for (let value of data) {
    return children(value);
  }
};
