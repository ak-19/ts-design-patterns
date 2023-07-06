import { IStrategy } from './istrategy';

export class AdditionStrategy implements IStrategy {
    calculate(a: number, b: number): number {
        return a + b;
    }
}