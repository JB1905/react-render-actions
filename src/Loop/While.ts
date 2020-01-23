interface Props {
  children: any;
  test: boolean;
}

export const While = ({ children, test }: Props) => {
  while (test) {
    return children;
  }
};
