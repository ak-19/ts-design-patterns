import { ISubject } from "./isubject";
import { Subject } from "./subject";

export class SubjectCacheProxy implements ISubject {
    private subject: Subject;
    private data: string;
    
    public getData(): string {
        if (!this.subject) {
            this.subject = new Subject();
            this.data = this.subject.getData();
        }
        return this.data;
    }
}