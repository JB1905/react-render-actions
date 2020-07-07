import { useState } from 'react';

interface Props {
  children: any;
  enabled: boolean;
  timeout: number;
  onTimeout: () => void;
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
      onTimeout();
    }, timeout);
  }

  return done ? children : null;
};
