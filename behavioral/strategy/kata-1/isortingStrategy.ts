import { Person } from "./person";

export interface ISortingStrategy {
    sort(people: Person[]): Person[];
}