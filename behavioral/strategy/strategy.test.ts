import { AdditionStrategy } from './additionStrategy';
import { CalculationContext } from './calculationContext';
import { SubstractStrategy } from './substractStrategy';
import { MultiplyStrategy } from './multiplyStrategy';

describe('When calculation context is setup to addition strategy', () => {
    test('operation should add numbers', () => {
        const calculationContext = new CalculationContext(new AdditionStrategy());
        expect(calculationContext.calculate(1, 2)).toBe(3);
    });
});

describe('When calculation context is setup to substract strategy', () => {
    test('operation should substract numbers', () => {
        const calculationContext = new CalculationContext(new SubstractStrategy());
        expect(calculationContext.calculate(1, 2)).toBe(-1);
    });
});

describe('When calculation context is setup to multiply strategy', () => {
    test('operation should multiply numbers', () => {
        const calculationContext = new CalculationContext(new MultiplyStrategy());
        expect(calculationContext.calculate(3, 2)).toBe(6);
    });
});