import  { NumberIterator } from './numberIterator';
import  { PeopleIterator } from './peopleIterator';


describe('When number iterator is created with array of 5 numbers', () => {
    test('after iterating should have result with those numbers', () => {
        const numberIterator = new NumberIterator([1, 2, 3, 4, 5]);
        const result: number[] = []
        while (numberIterator.hasNext()) result.push(numberIterator.next());            
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});

describe('When 13 people iterator is created', () => {
    test('iteration should return 13 people and one of those should be john ', () => {
        const peopleIterator = new PeopleIterator();
        const result: string[] = [];
        while (peopleIterator.hasNext()) result.push(peopleIterator.next());
        expect(result.length).toBe(13);
        expect(result).toContain('John');
    });
});