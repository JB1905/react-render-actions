import { Children } from '../interfaces/Children';

interface Props extends Children {}

export const Default = ({ children }: Props) => {
  return children;
};
