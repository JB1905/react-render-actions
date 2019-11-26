import React from 'react';

import { SwitchContext } from './context';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  switchValue: any;
}

export const Switch = ({ switchValue, children }: Props) => {
  return (
    <SwitchContext.Provider value={switchValue}>
      {children}
    </SwitchContext.Provider>
  );
};
