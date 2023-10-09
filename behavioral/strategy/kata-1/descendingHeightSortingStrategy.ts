import { ISortingStrategy } from "./isortingStrategy";
import { Person } from "./person";

export class DescendingHeightSortingStrategy implements ISortingStrategy {
    sort(people: Person[]) {
        return people.sort((a, b) => b.height - a.height);
    }
}