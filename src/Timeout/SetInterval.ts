import { Children } from '../interfaces/Children';

interface Props extends Children {
  callback: () => void;
  enabled: boolean;
  interval: number;
}

export const SetInterval = ({ callback, enabled, interval }: Props) => {
  if (enabled) {
    setInterval(() => {
      callback();
    }, interval);
  }

  return null;
};
