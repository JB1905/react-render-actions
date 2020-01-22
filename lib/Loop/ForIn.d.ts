import { Children } from '../interfaces/Children';
interface Props extends Children {
    data: object;
    property: string;
    as: any;
}
export declare const ForIn: ({ children, data, as, property }: Props) => any;
export {};
