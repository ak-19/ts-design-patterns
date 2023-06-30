import { IIterable } from './iiterable';

export class NumberIterator implements IIterable<number>  {
    private _numbers: number[];
    private _currentIndex: number = 0;

    constructor(numbers: number[]) {
        this._numbers = numbers;
    }

    public next(): number {
        if (this._currentIndex < this._numbers.length) return this._numbers[this._currentIndex++];
        throw new Error("No more elements");        
    }


    public hasNext(): boolean {
        return this._currentIndex < this._numbers.length;
    }
}

