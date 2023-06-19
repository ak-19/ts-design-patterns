interface IVal {
    value(): number;
}

export class Val implements IVal {
    constructor(private val: number) { }
    value(): number {
        return this.val;
    }
}

export class Add implements IVal {
    constructor(private a: IVal, private b: IVal) { }
    value(): number {
        return this.a.value() + this.b.value();
    }
}

export class Substract implements IVal {
    constructor(private a: IVal, private b: IVal) { }
    value(): number {
        return this.a.value() - this.b.value();
    }
}

export const add = (a: IVal | number, b: IVal | number) => {
    const A = typeof a === 'number' ? new Val(a) : a;
    const B = typeof b === 'number' ? new Val(b) : b;
    return new Add(A, B);
}
export const substract = (a: IVal | number, b: IVal | number) => {
    const A = typeof a === 'number' ? new Val(a) : a;
    const B = typeof b === 'number' ? new Val(b) : b;
    return new Substract(A, B);
}
export const evaluate = (a: IVal | number) => {
    if (typeof a === 'number') return a;
    return a.value();
}