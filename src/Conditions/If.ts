import { Then } from './Then';
import { Else } from './Else';

interface Props {
  children: any;
  condition: boolean;
}

export const If = ({ children, condition }: Props) => {
  return children.find((child: any) => {
    return condition ? child.type === Then : child.type === Else;
  });
};
