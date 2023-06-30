export interface IIterable <T> {
    next(): T;
    hasNext(): boolean;
}