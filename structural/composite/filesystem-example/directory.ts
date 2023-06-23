import { File } from './file';

export class Directory {
    constructor(public name: string) { }

    private files: Array<File | Directory> = [];

    add(file: File | Directory) {
        this.files.push(file);
    }

    remove(file: File | Directory) {
        const index = this.files.indexOf(file);
        this.files.splice(index, 1);
    }

    ls(): string {
        const a: string[] = [this.name];
        this.files.forEach(file => a.push(file.ls()));
        return a.join('');
    }
}
