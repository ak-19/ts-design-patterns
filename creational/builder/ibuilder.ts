import Car from "./car";

export default interface IBuilder {
    setDoors(doors: number): IBuilder;
    setRoof(roof: boolean): IBuilder;
    setEngine(engine: string): IBuilder;
    setColor(color: string): IBuilder;
    setWheels(wheels: number): IBuilder;
    setSeats(seats: number): IBuilder;
    setTrunk(trunk: boolean): IBuilder;
    getCar(): Car;
}