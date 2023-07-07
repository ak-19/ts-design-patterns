import { IVisitor } from "./Ivisitor";
import { IElement } from "./ielement";

export class ConcreteElementB implements IElement {
    constructor(private description: string) {
    }
    
    getDescription() {
        return this.description;
    }

    accept(visitor: IVisitor) {
        return visitor.visitConcreteElementB(this);
    }   
}