import { useState, useEffect } from 'react';

interface Props {
  children: any;
  initialCounter?: number;
  enabled?: boolean;
  timeout: number;
  onInterval?: (counter: number) => void;
}

export const SetInterval = ({
  children,
  initialCounter = 0,
  enabled = true,
  timeout,
  onInterval,
}: Props) => {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    if (enabled) {
      const interval = setInterval(() => {
        const updatedCounter = counter + 1;

        setCounter(updatedCounter);

        if (typeof onInterval === 'function') {
          onInterval(updatedCounter);
        }
      }, timeout);

      return () => clearInterval(interval);
    }
  }, [counter, enabled, onInterval, timeout]);

  return enabled ? children(counter) : null;
};
