import { Children } from '../interfaces/Children';

interface Props extends Children {
  condition: boolean;
}

export const Unless = ({ condition, children }: Props) => {
  return condition ? null : children;
};
