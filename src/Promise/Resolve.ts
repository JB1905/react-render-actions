import { Children } from '../interfaces/Children';

interface Props extends Children {}

export const Resolve = ({ children }: Props) => {
  return children;
};
