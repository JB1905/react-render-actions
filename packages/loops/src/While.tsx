import React from 'react';

interface Props {
  children: JSX.Element;
  test: boolean;
}

export const While = ({ children, test }: Props) => {
  const results = [];

  while (test) {
    // interruption(children)

    results.push(children);
  }

  return <>{results}</>;
};
