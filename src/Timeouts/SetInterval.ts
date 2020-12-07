import { useState, useEffect } from 'react';

interface Props {
  children: (counter: number) => JSX.Element;
  readonly initialCounter?: number;
  readonly paused?: boolean;
  readonly interval: number;
  onInterval?: (counter: number) => void;
  onStart?: () => void;
  onPause?: () => void;
  onDestroy?: () => void;
}

export const SetInterval = ({
  children,
  initialCounter = 0,
  paused,
  interval,
  onInterval,
  onStart,
  onPause,
  onDestroy,
}: Props) => {
  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    if (!paused) {
      onStart?.();

      const timer = setInterval(() => {
        const updatedCounter = counter + 1;

        setCounter(updatedCounter);

        onInterval?.(updatedCounter);
      }, interval);

      return () => {
        clearInterval(timer);

        onDestroy?.();
      };
    } else {
      onPause?.();
    }
  }, [counter, paused, onInterval, interval, onStart, onDestroy, onPause]);

  return children(counter);
};
