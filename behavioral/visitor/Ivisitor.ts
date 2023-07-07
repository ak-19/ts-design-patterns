import { IElement } from "./ielement";

export interface IVisitor {
    visitConcreteElementA(element: IElement): string;
    visitConcreteElementB(element: IElement): string;
}