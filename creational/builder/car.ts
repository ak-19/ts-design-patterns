export default class Car {
    private doors: number;
    private roof: boolean = false; 
    private engine: string;
    private color: string;
    private wheels: number;
    private seats: number;
    private trunk: boolean;    

    get Doors(): number {
        return this.doors;
    }

    set Doors(value: number) {
        this.doors = value;
    }

    get Roof(): boolean {
        return this.roof;
    }

    set Roof(value: boolean) {
        this.roof = value;
    }

    get Engine(): string {
        return this.engine;
    }

    set Engine(value: string) {
        this.engine = value;
    }

    get Color(): string {
        return this.color;
    }

    set Color(value: string) {
        this.color = value;
    }

    get Wheels(): number {
        return this.wheels;
    }

    set Wheels(value: number) {
        this.wheels = value;
    }

    get Seats(): number {
        return this.seats;
    }

    set Seats(value: number) {
        this.seats = value;
    }

    get Trunk(): boolean {
        return this.trunk;
    }

    set Trunk(value: boolean) {
        this.trunk = value;
    }

    public toString(): string {
        return `Car: 
        Doors: ${this.doors}
        Roof: ${this.roof}
        Engine: ${this.engine}
        Color: ${this.color}
        Wheels: ${this.wheels}
        Seats: ${this.seats}
        Trunk: ${this.trunk}`;
    }
    
}