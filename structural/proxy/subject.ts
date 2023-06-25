import { ISubject } from "./isubject";

export class Subject implements ISubject {
    public getData(): string {
        return `This is original subject data: Test 001`;
    }
}
