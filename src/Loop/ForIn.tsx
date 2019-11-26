import { Children } from '../interfaces/Children';

interface Props extends Children {
  data: object;
  property: string;
}

export const ForIn = ({ children, data, property }: Props) => {
  for (property in data) {
    return children;
  }
};
