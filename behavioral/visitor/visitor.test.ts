import { ConcreteElementA } from "./concreteElementA";
import { ConcreteElementB } from "./concreteElementB";
import { ConcreteVisitor } from "./concreteVisitor";

describe('When ConcreteElementA excutes accept with ConcreteVisitor as paremeter', () => {
    test('should return ConcreteVisitor visited ConcreteElementA with description ConcreteElementA', () => {
        const concreteElementA = new ConcreteElementA('ConcreteElementA', 'ConcreteElementA');
        const concreteVisitor = new ConcreteVisitor();
        expect(concreteElementA.accept(concreteVisitor)).toBe('ConcreteVisitor visited ConcreteElementA with description ConcreteElementA');  
    });
});

describe('When ConcreteElementB excutes accept with ConcreteVisitor as paremeter', () => {
    test('should return ConcreteVisitor visited ConcreteElementB with description ConcreteElementB', () => {
        const concreteElementA = new ConcreteElementB('ConcreteElementB');
        const concreteVisitor = new ConcreteVisitor();
        expect(concreteElementA.accept(concreteVisitor)).toBe('ConcreteVisitor visited ConcreteElementB with description ConcreteElementB');  
    });
});