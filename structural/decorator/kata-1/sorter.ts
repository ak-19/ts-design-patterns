import { ISort } from "./isort";

export class Sorter implements ISort {
    sort(a: number[]): number[] {
        const b = a.slice();
        return b.sort();
    }
}