import { ITarget, IBTarget } from "./itarget";
import { B } from "./b";

export class BToAAdapter implements ITarget {
    private b: B;
    constructor(b: IBTarget) {
        this.b = b;
    }

    public methodA(): string {
        return this.b.methodB();
    }
}