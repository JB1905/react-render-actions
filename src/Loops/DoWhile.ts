interface Props {
  children: JSX.Element;
  test: boolean;
}

export const DoWhile = ({ children, test }: Props) => {
  do {
    return children;
  } while (test);
};
