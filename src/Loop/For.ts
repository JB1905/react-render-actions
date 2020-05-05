import { Break } from './Break';
import { Continue } from './Continue';

interface Props {
  children: any;
  start: number;
  comparator: any;
  next: any;
}

export const For = ({ children, start, comparator, next }: Props) => {
  for (let i = start; comparator(i); i = next(i)) {
    // children.findIndex((c: any) => (c.type = Break));

    // children.findIndex((c: any) => (c.type = Continue));

    return children;
  }
};
