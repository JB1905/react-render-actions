import { useState, useEffect } from 'react';

interface Props {
  readonly children: JSX.Element;
  readonly timeout: number;
  readonly enabled?: boolean;
  onTimeout?: () => void;
  onEnabled?: () => void;
  onDisabled?: () => void;
  onDestroy?: () => void;
}

export const SetTimeout = ({
  children,
  enabled,
  timeout,
  onTimeout,
  onEnabled,
  onDisabled,
  onDestroy,
}: Props) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    onEnabled?.();

    if (enabled) {
      const timer = setTimeout(() => {
        setDone(true);

        onTimeout?.();
      }, timeout);

      return () => {
        clearTimeout(timer);

        onDestroy?.();
      };
    } else {
      onDisabled?.();

      setDone(false);
    }
  }, [enabled, onDestroy, onDisabled, onEnabled, onTimeout, timeout]);

  return done ? children : null;
};
