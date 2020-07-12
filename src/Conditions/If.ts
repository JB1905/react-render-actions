import { Then } from './Then';
import { Else } from './Else';

interface Props {
  children: JSX.Element[] | any[];
  condition: boolean;
}

export const If = ({ children, condition }: Props) => {
  return children.find((child) => {
    return condition ? child.type === Then : child.type === Else;
  });
};
