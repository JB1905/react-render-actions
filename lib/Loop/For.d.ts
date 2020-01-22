/// <reference types="react" />
import { Children } from '../interfaces/Children';
interface Props extends Children {
    iterationsCount: number;
}
export declare const For: ({ children, iterationsCount }: Props) => import("react").ReactChildren | import("react").ReactChildren[] | undefined;
export {};
