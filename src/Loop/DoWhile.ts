interface Props {
  children: any;
  test: any;
}

export const DoWhile = ({ children, test }: Props) => {
  do {
    return children;
  } while (test);
};
