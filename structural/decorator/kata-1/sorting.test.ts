import { ISort } from './isort';
import { ReverseSortDecorator } from './reverseSortDecorator';
import { Sorter } from './sorter';


describe('Sanity test for reverse sort decorator',() => {
    test('should work without any problem', () => {
        const a = [2,1,3,5,4];
        const reverseDecorator = new ReverseSortDecorator(new Sorter());
        reverseDecorator.sort(a);
    });
});


describe('When input is [2,1,3,5,4]',() => {
    test('should reverse sorted array [5,4,3,2,1]', () => {
        const a = [2,1,3,5,4];
        const reverseDecorator = new ReverseSortDecorator(new Sorter());
        const expectation = [5,4,3,2,1];
        const got = reverseDecorator.sort(a);
        expect(got).toEqual(expectation)
    });
});