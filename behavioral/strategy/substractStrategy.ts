import { IStrategy } from "./istrategy";

export class SubstractStrategy implements IStrategy {
    calculate(a: number, b: number): number {
        return a - b;
    }
}