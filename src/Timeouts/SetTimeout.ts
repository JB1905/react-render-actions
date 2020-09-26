import { useState, useEffect } from 'react';

interface Props {
  readonly children: JSX.Element;
  readonly timeout: number;
  readonly enabled?: boolean;
  readonly onTimeout?: () => void;
}

export const SetTimeout = ({
  children,
  enabled,
  timeout,
  onTimeout,
}: Props) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (enabled) {
      const timer = setTimeout(() => {
        setDone(true);

        if (typeof onTimeout === 'function') {
          onTimeout();
        }
      }, timeout);

      return () => clearTimeout(timer);
    } else {
      setDone(false);
    }
  }, [enabled, onTimeout, timeout]);

  return done ? children : null;
};
