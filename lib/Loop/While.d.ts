/// <reference types="react" />
import { Children } from '../interfaces/Children';
interface Props extends Children {
    test: boolean;
}
export declare const While: ({ children, test }: Props) => import("react").ReactChildren | import("react").ReactChildren[] | undefined;
export {};
