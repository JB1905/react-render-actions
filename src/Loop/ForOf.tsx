import { Children } from '../interfaces/Children';

interface Props extends Children {
  data: any[];
  key: keyof any[];
  value: any[keyof any[]];
}

export const ForOf = ({ children, data, key, value }: Props) => {
  for ([key, value] of data) {
    return children;
  }
};
