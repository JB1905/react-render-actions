import { useState } from 'react';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  callback: () => void;
  enabled: boolean;
  timeout: number;
}

export const SetTimeout = ({ children, enabled, timeout }: Props) => {
  const [done, setDone] = useState(false);

  // if (enabled) {
  setTimeout(() => {
    setDone(true);
  }, timeout);
  // }

  return done ? children : null;
};
