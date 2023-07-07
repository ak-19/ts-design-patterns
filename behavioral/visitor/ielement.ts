import { IVisitor } from "./Ivisitor";

export interface IElement {
    accept(visitor: IVisitor): string;
}