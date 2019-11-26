import { Children } from '../interfaces/Children';

interface Props extends Children {
  condition: boolean;
}

export const DoWhile = ({ children, condition }: Props) => {
  do {
    return children;
  } while (condition);
};
