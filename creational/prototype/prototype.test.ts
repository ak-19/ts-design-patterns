import Man from "./man";

describe('When called clone on Man instance', () => {
    test('should return new instance with same properties', () => {
        const man = new Man('Ante', 20);
        const newMan = man.clone();

        expect(newMan).toHaveProperty('name', 'Ante');
        expect(newMan).toHaveProperty('age', 20);
        expect(newMan).not.toBe(man);
    });
});