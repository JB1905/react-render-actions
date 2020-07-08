interface Props {
  children: any;
  test: any;
}

export const While = ({ children, test }: Props) => {
  while (test) {
    return children;
  }
};
