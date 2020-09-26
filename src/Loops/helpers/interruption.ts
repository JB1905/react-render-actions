import { Break } from '../Break';
import { Continue } from '../Continue';

interface Props {
  children: JSX.Element[];
}

export const interruption = ({ children }: Props) => {
  if (children.find((child) => child.type === Break)) {
    break;
  } else if (children.find((child) => child.type === Continue)) {
    continue;
  }
};
