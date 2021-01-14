import React from 'react';

interface Props {
  children: JSX.Element;
  test: boolean;
}

export const DoWhile = ({ children, test }: Props) => {
  const results = [];

  do {
    results.push(children);
  } while (test);

  return <>{results}</>;
};
