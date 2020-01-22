import { Children } from '../interfaces/Children';

interface Props {
  children: any;
  data: any[];
  key: keyof any[];
  value: any[keyof any[]];
}

export const ForOf = ({ children, data, key, value }: Props) => {
  // for ([key, value] of data) {
  for (value of data) {
    return children(value);
  }
};
