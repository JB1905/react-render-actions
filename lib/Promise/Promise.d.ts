import { Children } from '../interfaces/Children';
interface Props extends Children {
    promise: Promise<any>;
    type: any;
}
export declare const RPromise: ({ promise, type, children }: Props) => void;
export {};
