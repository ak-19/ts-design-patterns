import { ISort } from "./isort";

export class ReverseSortDecorator implements ISort {
    constructor(private sorter: ISort) { }
    sort(a: number[]): number[] {
        return this.sorter.sort(a.slice()).reverse();
    }
}