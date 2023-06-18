import { ConcreteComponent, Decorator } from './decorator';

describe('When decorator is amde with component and method is called via decorator', () => {
    test('should return DecoratedConcreteComponent value', () => {
        const component = new ConcreteComponent();
        const decoratorA = new Decorator(component);
        expect(decoratorA.operation()).toBe('DecoratedConcreteComponent' );
    });
});