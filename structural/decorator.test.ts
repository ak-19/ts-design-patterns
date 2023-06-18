import { ConcreteComponent, Decorator } from './decorator';

describe('Name of the group', () => {
    test('should ', () => {
        const component = new ConcreteComponent();
        const decoratorA = new Decorator(component);
        expect(decoratorA.operation()).toBe('DecoratedConcreteComponent' );
    });
});