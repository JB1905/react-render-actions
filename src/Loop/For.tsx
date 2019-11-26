import { Children } from '../interfaces/Children';

interface Props extends Children {
  iterationsCount: number;
}

export const For = ({ children, iterationsCount }: Props) => {
  for (let iteration = 0; iteration < iterationsCount; iteration++) {
    return children;
  }
};
