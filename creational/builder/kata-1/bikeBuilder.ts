import { IVehicleBuilder } from "./ivehicleBuilder";

export class BikeBuilder implements IVehicleBuilder {
    private seats: number;
    private windows: number;
    private wheels: number;
    private lights: number;

    setSeats(seatNumber: number): IVehicleBuilder {
        this.seats = seatNumber;
        return this;
    }

    setWheels(wheelNumber: number): IVehicleBuilder {
        this.wheels = wheelNumber;
        return this;
    }

    setWindows(windowNumber: number): IVehicleBuilder {
        this.windows = windowNumber;
        return this;
    }

    setLights(lightNumber: number): IVehicleBuilder {
        this.lights = lightNumber;
        return this;
    }

    getSeats(): number {
        return this.seats;
    }

    getWheels(): number {
        return this.wheels;
    }

    getWindows(): number {
        return this.windows;
    }

    getLights(): number {
        return this.lights;
    }        

    build(): void {
        this.setSeats(1).setLights(1).setWheels(2).setWindows(0);
    }
}