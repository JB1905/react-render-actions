import { useState, useEffect } from 'react';

interface Props {
  children: any;
  initialCounter: number;
  enabled: boolean;
  timeout: number;
}

export const SetInterval = ({
  children,
  initialCounter = 0,
  enabled = true,
  timeout,
}: Props) => {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => {
        setCounter(counter + 1);
      }, timeout);

      return () => clearInterval(interval);
    }
  }, [counter, enabled, timeout]);

  return enabled ? children(counter) : null;
};
