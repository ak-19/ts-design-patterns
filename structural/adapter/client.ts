import { A } from "./a";

export class Client {
    private a: A;
    constructor(a: A) {
        this.a = a;
    }

    public callMethodA(): string {
        return this.a.methodA();
    }
}