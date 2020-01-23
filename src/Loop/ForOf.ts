import { Children } from '../interfaces/Children';

interface Props {
  children: any;
  data: any[];
}

export const ForOf = ({ children, data }: Props) => {
  for (let value of data) {
    return children(value);
  }
};
