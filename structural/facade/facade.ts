import SubSystemA from "./subSystemA";
import SubSystemB from "./subSystemB";

export default class Facade {
    private subSystemA: SubSystemA;
    private subSystemB: SubSystemB;

    constructor(subSystemA, subSystemB) {
        this.subSystemA = subSystemA;
        this.subSystemB = subSystemB;
    }
    operation() {
        return `${this.subSystemA.operation()} ${this.subSystemB.operation()}`;
    }
}