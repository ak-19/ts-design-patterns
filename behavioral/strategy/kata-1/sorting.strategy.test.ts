import { AgeSortingStrategy } from "./ageSortingStrategy";
import { DescendingHeightSortingStrategy } from "./descendingHeightSortingStrategy";
import { NameSortingStrategy } from "./nameSortingStrategy";
import { Person } from "./person";
import { SortingHandler } from "./sortingHandler";

let people: Person[] = [];
let sorter: SortingHandler | undefined = undefined;

beforeAll(() => {
    people = [
        new Person('Joe', 34, 180),
        new Person('Mateo', 31, 178),
        new Person('Bob', 30, 179),
        new Person('John', 39, 172),
        new Person('Anthony', 45, 174),
    ];
})

describe('When group of people is sorted with name sorting strategy', () => {
    test('people should be sorted by name in ascending order', () => {
        sorter = new SortingHandler(new NameSortingStrategy());
        const sortedPeople: Person[] = sorter.sort(people);
        expect(sortedPeople[0]).toHaveProperty('name', 'Anthony');        
        expect(sortedPeople[1]).toHaveProperty('name', 'Bob');
        expect(sortedPeople[2]).toHaveProperty('name', 'Joe');
        expect(sortedPeople[3]).toHaveProperty('name', 'John');
        expect(sortedPeople[4]).toHaveProperty('name', 'Mateo');
    });
});

describe('When group of people is sorted with age sorting strategy', () => {
    test('people should be sorted by age in ascending order', () => {
        sorter = new SortingHandler(new AgeSortingStrategy());
        const sortedPeople: Person[] = sorter.sort(people);
        expect(sortedPeople[0]).toHaveProperty('name', 'Bob');        
        expect(sortedPeople[1]).toHaveProperty('name', 'Mateo');
        expect(sortedPeople[2]).toHaveProperty('name', 'Joe');
        expect(sortedPeople[3]).toHaveProperty('name', 'John');
        expect(sortedPeople[4]).toHaveProperty('name', 'Anthony');
    });
});

describe('When group of people is sorted with descending height sorting strategy', () => {
    test('people should be sorted by height in descending order', () => {
        sorter = new SortingHandler(new DescendingHeightSortingStrategy());
        const sortedPeople: Person[] = sorter.sort(people);
        expect(sortedPeople[0]).toHaveProperty('name', 'Joe');
        expect(sortedPeople[1]).toHaveProperty('name', 'Bob');        
        expect(sortedPeople[2]).toHaveProperty('name', 'Mateo');
        expect(sortedPeople[3]).toHaveProperty('name', 'Anthony');
        expect(sortedPeople[4]).toHaveProperty('name', 'John');
    });
});