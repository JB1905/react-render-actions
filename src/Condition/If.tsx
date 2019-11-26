import { Children } from '../interfaces/Children';

interface Props extends Children {
  condition: boolean;
}

export const If = ({ children, condition }: Props) => {
  return condition ? children : null;
};
