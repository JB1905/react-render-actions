import { useState, useEffect } from 'react';

interface Props {
  readonly children: JSX.Element;
  readonly timeout: number;
  readonly enabled?: boolean;
  readonly onTimeout?: () => void;
  // readonly onDone?: () => void;
  readonly onEnabled?: () => void;
  readonly onDisabled?: () => void;
  // readonly onDestroy?: () => void;
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
      // console.time('start');

      const timer = setTimeout(() => {
        setDone(true);

        // console.timeEnd('start');

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
