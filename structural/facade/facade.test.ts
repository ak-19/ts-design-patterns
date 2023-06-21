import Facade from "./facade";
import SubSystemA from "./subSystemA";
import SubSystemB from "./subSystemB";

describe('When calling operation method on facade of SubSystemA and SubSystemB', () => {
    test('operation should return "SubSystemA.operation() SubSystemB.operation()"', () => {
        const subSystemA = new SubSystemA();
        const subSystemB = new SubSystemB();
        const facade = new Facade(subSystemA, subSystemB);

        expect(facade.operation()).toBe('SubSystemA.operation() SubSystemB.operation()');
    });
});