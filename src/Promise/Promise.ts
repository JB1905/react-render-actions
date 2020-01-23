import { Resolve } from './Resolve';
import { Reject } from './Reject';

interface Props {
  children: any[];
  promise: Promise<any>;
  type: any;
}

export const RPromise = ({ children, promise, type }: Props) => {
  promise
    .then(() => children.findIndex((c: any) => (c.type = Resolve)))
    .catch(() => children.findIndex((c: any) => (c.type = Reject)));
};
