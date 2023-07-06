import { IStrategy } from "./istrategy";

export class MultiplyStrategy implements IStrategy {
    calculate(a: number, b: number) {
        return a * b;
    }
}