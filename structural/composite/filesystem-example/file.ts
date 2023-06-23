export class File {
    private name: string;
    constructor(name: string) {  this.name = name; }

    ls(): string {
        return this.name;
    }   
}
