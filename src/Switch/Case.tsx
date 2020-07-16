import React from 'react';

interface Props {
  readonly case: string;
}

export const Case: React.FC<Props> = ({ children }) => <>{children}</>;
