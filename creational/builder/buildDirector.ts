import Car from "./car";
import IBuilder from "./ibuilder";

export default class BuildDirector {
    private builder: IBuilder;

    constructor(builder: IBuilder) {
        this.builder = builder;
    }

    buildCar(): Car {
        return this.builder
            .setDoors(4)
            .setEngine('V8')
            .setColor('red')
            .setWheels(4)
            .setSeats(5)
            .setTrunk(true)
            .getCar();   
    }
}