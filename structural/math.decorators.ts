interface IVal {
    value(): number;
}

export class Val implements IVal {
    constructor(private val: number) {}
    value(): number {
        return this.val;
    }
}

export class Add implements IVal {
    constructor(private a: IVal, private b: IVal) {}
    value(): number {
        return this.a.value() + this.b.value();
    }
}

export class Substract implements IVal {    
    constructor(private a: IVal, private b: IVal) {}
    value(): number {
        return this.a.value() - this.b.value();
    }
}

export const add = (a: IVal, b: IVal) => new Add(a, b);
export const substract = (a: IVal, b: IVal) => new Substract(a, b);
export const evaluate = (a: IVal) => a.value();