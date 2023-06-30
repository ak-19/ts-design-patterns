import { IIterable } from './iiterable';

export class PeopleIterator implements IIterable<string> {
    private people: string[] = [
        'John',
        'Mary',
        'Peter',
        'Paul',
        'Jane',
        'Mark',
        'Luke',
        'Matthew',
        'James',
        'Jude',
        'Simon',
        'Andrew',
        'Philip'];
    private index: number = 0;

    next(): string {
        if (this.index < this.people.length) return this.people[this.index++];
        throw new Error("No more people.");
    }
    hasNext(): boolean {
        return this.index < this.people.length;
    }
}