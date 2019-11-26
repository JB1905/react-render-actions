import { Children } from '../interfaces/Children';

interface Props extends Children {
  iteration: boolean;
}

export const While = ({ children, iteration }: Props) => {
  while (iteration) {
    return children;
  }
};
