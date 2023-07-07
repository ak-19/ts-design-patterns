import { IVisitor } from "./Ivisitor";
import { IElement } from "./ielement";

export class ConcreteElementA implements IElement {
    constructor(private name: string, private description: string) { }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    accept(visitor: IVisitor) {
        return visitor.visitConcreteElementA(this);
    }
}