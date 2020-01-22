import { Case } from './Case';
import { Default } from './Default';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  switchValue: any;
}

export const Switch = ({ switchValue, children }: Props) => {
  console.log([].concat(children as any));

  return children;

  // switch(switchValue) {
  //   case
  // }
};
