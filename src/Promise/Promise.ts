import { Resolve } from './Resolve';
import { Reject } from './Reject';

import { Children } from '../interfaces/Children';

interface Props extends Children {
  promise: Promise<any>;
}

export const RPromise = ({ promise, children }: Props) => {
  const a = [].concat(children as any);

  promise
    .then(() => a.findIndex((c: any) => (c.type = Resolve)))
    .catch(() => a.findIndex((c: any) => (c.type = Reject)));
};
