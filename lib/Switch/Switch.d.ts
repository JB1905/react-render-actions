/// <reference types="react" />
import { Children } from '../interfaces/Children';
interface Props extends Children {
    switchValue: any;
}
export declare const Switch: ({ switchValue, children }: Props) => import("react").ReactChildren | import("react").ReactChildren[];
export {};
