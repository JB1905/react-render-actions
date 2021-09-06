import React from 'react';

import { Then } from './Then';
import { Else } from './Else';

interface Props {
  readonly children: JSX.Element[];
  readonly condition: boolean;
}

export const If = ({ children, condition }: Props) => (
  <>
    {children.find((child) => {
      return condition ? child.type === Then : child.type === Else;
    })}
  </>
);
