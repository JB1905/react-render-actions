import { useState } from 'react';

interface Props {
  children: any;
  callback: () => void;
  enabled: boolean;
  timeout: number;
}

export const SetTimeout = ({ children, enabled, timeout }: Props) => {
  const [done, setDone] = useState(false);

  if (enabled) {
    setTimeout(() => {
      setDone(true);
    }, timeout);
  }

  return done ? children : null;
};
