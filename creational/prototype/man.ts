import IPrototype from "./iprototype";

export default class Man implements IPrototype {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    clone(): IPrototype {
        return new Man(this.name, this.age);
    }
}
