import { ISortingStrategy } from "./isortingStrategy";
import { Person } from "./person";

export class AgeSortingStrategy implements ISortingStrategy {
    sort(people: Person[]): Person[]{
        return people.slice().sort((a, b) => a.age - b.age);
    }
}