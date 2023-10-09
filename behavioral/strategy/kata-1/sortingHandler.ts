import { ISortingStrategy } from "./isortingStrategy";
import { Person } from "./person";

export class SortingHandler {
    constructor(private sortingStrategy: ISortingStrategy) { }

    public sort(people: Person[]): Person[] {
        return this.sortingStrategy.sort(people);
    }
}