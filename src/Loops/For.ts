import { Break } from './Break';
import { Continue } from './Continue';

interface Props {
  children: JSX.Element[];
  start: number;
  comparator: (i: any) => any;
  next: (i: any) => any;
}

export const For = ({ children, start, comparator, next }: Props) => {
  for (let i = start; comparator(i); i = next(i)) {
    if (children.find((child) => child.type === Break)) {
      break;
    } else if (children.find((child) => child.type === Continue)) {
      continue;
    }

    return children;
  }
};
