import { useState, useEffect } from 'react';

interface Props {
  readonly children: any;
  readonly initialCounter?: number;
  readonly enabled?: boolean;
  readonly timeout: number;
  readonly onInterval?: (counter: number) => void;
}

export const SetInterval = ({
  children,
  initialCounter = 0,
  enabled,
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
