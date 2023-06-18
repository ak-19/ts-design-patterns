import { Val, add, evaluate, substract } from "./math.decorators";

describe('When a = 1 and b = 2 values are pushed through add, then substract with b and then evaluate', () => {
    test('should return 1', () => {
        const a = new Val(1); 
        const b = new Val(2);
        expect(evaluate(substract(add(a, b), b))).toBe(1);
    });
});