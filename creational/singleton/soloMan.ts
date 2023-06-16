export default class SoloMan {
    private static instance: SoloMan;
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        if (SoloMan.instance) return SoloMan.instance;
        this.name = name;
        this.age = age;
        SoloMan.instance = this;
    }


    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }
}