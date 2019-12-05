import { Children } from '../interfaces/Children';

interface Props extends Children {
  condition: boolean;
}

export const When = ({ condition, children }: Props) => {
  return condition ? children : null;
};
