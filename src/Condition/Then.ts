import { Children } from '../interfaces/Children';

interface Props {
  children: Children;
}

export const Then = ({ children }: Props) => {
  return children;
};
