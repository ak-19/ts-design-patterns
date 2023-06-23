import { Leaf } from './leaf';
import { Composite } from './composite';


describe('Composite Pattern test set', () => {
    describe('When single leaf node is made and operation is executed on it', () => {
        test('should return Leaf', () => {
            const leaf = new Leaf();
            expect(leaf.operation()).toBe('Leaf');
        });
    });

    describe('When composite components is created with 2 leaf children', () => {
        test('should return Branch(Leaf+Leaf)', () => {
            const branch = new Composite();
            branch.add(new Leaf());
            branch.add(new Leaf());
            expect(branch.operation()).toBe('Branch(Leaf+Leaf)');
        });
    });

    describe('When composite with 2 leaf children is add to composite as child that alrady has one leaf child', () => {
        test('should return Branch(Branch(Leaf+Leaf)+Leaf)', () => {
            const branch = new Composite();
            branch.add(new Leaf());
            branch.add(new Leaf());
            const branch2 = new Composite();
            branch2.add(branch);
            branch2.add(new Leaf());
            expect(branch2.operation()).toBe('Branch(Branch(Leaf+Leaf)+Leaf)');
        });
    });
});
