import { useState } from 'react';

interface Props {
  children: any;
  enabled: boolean;
  timeout: number;
  onTimeout?: () => void;
}

export const SetTimeout = ({
  children,
  enabled,
  timeout,
  onTimeout,
}: Props) => {
  const [done, setDone] = useState(false);

  if (enabled) {
    setTimeout(() => {
      setDone(true);

      if (typeof onTimeout === 'function') {
        onTimeout();
      }
    }, timeout);
  }

  return done ? children : null;
};
