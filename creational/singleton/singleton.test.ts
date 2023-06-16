import SoloMan from "./soloMan";

describe('When making 2 instances os SoloMan class', () => {
    test('They should same instance with same properties, wich is first instantiated object', () => {
        const solo = new SoloMan('Ante', 20);
        const solo2 = new SoloMan('Mate', 22);
        expect(solo2.getName()).toBe('Ante');
        expect(solo2.getAge()).toBe(20);
        expect(solo).toBe(solo2);
    });
});