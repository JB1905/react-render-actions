/// <reference types="react" />
import { Children } from "../interfaces/Children";
interface Props extends Children {
    condition: boolean;
}
export declare const If: ({ children, condition }: Props) => import("react").ReactChildren | import("react").ReactChildren[] | null;
export {};
