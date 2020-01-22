import { Children } from '../interfaces/Children';
interface Props extends Children {
    promise: Promise<any>;
}
export declare const RPromise: ({ promise, children }: Props) => void;
export {};
