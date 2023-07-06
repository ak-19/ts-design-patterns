import { IStrategy } from './istrategy';

export class CalculationContext {
    constructor(private strategy: IStrategy) {
        this.strategy = strategy;
    }
    calculate(a: number, b: number) {
        return this.strategy.calculate(a, b);
    }
}