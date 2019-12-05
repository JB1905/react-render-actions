/// <reference types="react" />
import { Children } from '../interfaces/Children';
interface Props extends Children {
    data: any[];
    key: keyof any[];
    value: any[keyof any[]];
}
export declare const ForOf: ({ children, data, key, value }: Props) => import("react").ReactChildren | import("react").ReactChildren[] | undefined;
export {};
