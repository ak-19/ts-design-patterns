export interface IVehicleBuilder {
    setSeats(seatNumber: number): IVehicleBuilder;
    setWheels(seatNumber: number): IVehicleBuilder;
    setWindows(seatNumber: number): IVehicleBuilder;
    setLights(seatNumber: number): IVehicleBuilder;

    getSeats(): number;
    getWheels(): number;
    getWindows(): number;
    getLights(): number;

    build(): void;
}