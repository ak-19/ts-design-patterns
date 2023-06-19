import { ITarget } from "./itarget";

export class A implements ITarget {
    public methodA(): string {
        return 'methodA';
    }
}