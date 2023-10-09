import { ISortingStrategy } from "./isortingStrategy";
import { Person } from "./person";

export class NameSortingStrategy implements ISortingStrategy {
    sort(people: Person[]): Person[]{
        return people.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
}