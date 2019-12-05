import { Case } from './Case';
import { Default } from './Default';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  switchValue: any;
}

export const Switch = ({ switchValue, children }: Props) => {
  return children;
};
