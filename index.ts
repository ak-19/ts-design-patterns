class Person {
    private firstname: string;
    private lastname: string;
    constructor(name: string, lastname: string) {
        this.firstname = name;
        this.lastname = lastname;
    }

    public toString(): string {
        return `${this.firstname} ${this.lastname}`;
     }
}   

const john: Person = new Person('John', 'Johnes');

console.log(`Hello ${john}`);
