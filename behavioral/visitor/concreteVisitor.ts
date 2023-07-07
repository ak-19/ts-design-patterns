import { IVisitor } from "./Ivisitor";
import { ConcreteElementA } from "./concreteElementA";
import { ConcreteElementB } from "./concreteElementB";

export class ConcreteVisitor implements IVisitor {
    visitConcreteElementA(element: ConcreteElementA) {
        return `ConcreteVisitor visited ${element.getName()} with description ${element.getDescription()}`;
    }

    visitConcreteElementB(element: ConcreteElementB) {
        return `ConcreteVisitor visited ConcreteElementB with description ${element.getDescription()}`;
    }
}