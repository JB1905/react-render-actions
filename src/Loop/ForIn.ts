import { Children } from '../interfaces/Children';

interface Props extends Children {
  data: object;
  property: string;
  as: any;
}

export const ForIn = ({ children, data, as, property }: Props) => {
  for (property in data) {
    // return children;
    return as(property);
  }
};
