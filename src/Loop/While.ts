import { Children } from '../interfaces/Children';

interface Props extends Children {
  test: boolean;
}

export const While = ({ children, test }: Props) => {
  while (test) {
    return children;
  }
};
