import { useState, useEffect } from 'react';

interface Props {
  readonly children: (counter: number) => JSX.Element;
  readonly initialCounter?: number;
  readonly paused?: boolean;
  readonly interval: number;
  readonly onInterval?: (counter: number) => void;
  readonly onStart?: () => void;
  readonly onPause?: () => void;
  readonly onDestroy?: () => void;
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
      const timer = setInterval(() => {
        const updatedCounter = counter + 1;

        setCounter(updatedCounter);

        if (typeof onInterval === 'function') {
          onInterval(updatedCounter);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [counter, paused, onInterval, interval]);

  return children(counter);
};
