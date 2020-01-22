import { Then } from './Then';
import { Else } from './Else';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  condition: boolean;
}

export const If = ({ children, condition }: Props) => {
  return []
    .concat(children as any)
    .find((c: any) => (condition ? c.type === Then : c.type === Else));
};
