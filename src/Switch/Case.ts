import { Children } from '../interfaces/Children';

interface Props extends Children {}

export const Case = ({ children }: Props) => {
  return children;
};
