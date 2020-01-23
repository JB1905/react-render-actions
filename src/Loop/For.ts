import { Break } from './Break';
import { Continue } from './Continue';

interface Props {
  children: any;
  iterationsCount: number;
}

export const For = ({ children, iterationsCount }: Props) => {
  for (let iteration = 0; iteration < iterationsCount; iteration++) {
    return children;
  }
};
