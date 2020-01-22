import { Children } from '../interfaces/Children';

interface Props {
  children: Children;
}

export const Else = ({ children }: Props) => {
  return children;
};
