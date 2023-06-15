import Car from "./car";
import IBuilder from "./ibuilder";

export default class CabrioBuilder implements IBuilder  {
    private car: Car
    
    constructor() {
        this.car = new Car();
        this.car.Roof = false
    }

    setDoors(doors: number) : IBuilder{
        this.car.Doors = doors;
        return this;
    }

    setRoof(): IBuilder {
        return this;
    }
    
    setEngine(engine: string): IBuilder {
        this.car.Engine = engine;
        return this;
    }
    setColor(color: string): IBuilder {
        this.car.Color = color;
        return this;
    }
    setWheels(wheels: number): IBuilder {
        this.car.Wheels = wheels;
        return this;
    }

    setSeats(seats: number): IBuilder {
        this.car.Seats = seats;
        return this;
    }

    setTrunk(trunk: boolean): IBuilder {
        this.car.Trunk = trunk;
        return this;
    }

    getCar(): Car {
        return this.car;
    }
}