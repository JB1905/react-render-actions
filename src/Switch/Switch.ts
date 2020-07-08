import { useState } from 'react';

import { Case } from './Case';
import { Default } from './Default';

interface Props<T> {
  switchValue: T;
  children: any[];
  // onChange: (prev: any, curr: any) => void;
  // onCase?: (casex: any) => void;
  // onDefault: () => void;
}

export const Switch = <T>({
  switchValue,
  // onCase
  children,
}: Props<T>) => {
  const data: any[] = [];

  // const [currentCase, setCurrentCase] = useState<any>();

  children.forEach((child) => {
    if (data.length > 0) {
      return;
    }

    if (child.type === Case && child.props.case === switchValue) {
      data.push(child);

      // if (typeof onCase === 'function') {
      //   onCase(switchValue);
      // }

      // setCurrentCase(switchValue);
    }
  });

  if (data.length === 0) {
    const component = children.find((child) => child.type === Default);

    data.push(component ? component : null);
  }

  return data[0];
};
