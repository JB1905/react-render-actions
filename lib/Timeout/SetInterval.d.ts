import { Children } from '../interfaces/Children';
interface Props extends Children {
    callback: () => void;
    enabled: boolean;
    interval: number;
}
export declare const SetInterval: ({ callback, enabled, interval }: Props) => null;
export {};
