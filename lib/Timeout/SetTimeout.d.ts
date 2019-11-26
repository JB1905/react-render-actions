/// <reference types="react" />
import { Children } from "../interfaces/Children";
interface Props extends Children {
    callback: () => void;
    enabled: boolean;
    timeout: number;
}
export declare const SetTimeout: ({ children, enabled, timeout }: Props) => import("react").ReactChildren | import("react").ReactChildren[] | null;
export {};
