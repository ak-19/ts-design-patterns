import { BikeBuilder } from './bikeBuilder';
import { IVehicleBuilder } from './ivehicleBuilder';
import { VehicleBuildDirector } from './vehicleBuildDirector';
import { CarBuilder } from './carBuilder';

describe('BikeBuilder sanity test', () => {
    test('should build a bike without a problem', () => {
        const bikeBuilder: IVehicleBuilder = new BikeBuilder();
        const buildDirector = new VehicleBuildDirector(bikeBuilder);
        const bike = buildDirector.build().getVehicle();
        expect(bike).toBeTruthy();
    });
});

describe('BikeBuilder check all properties of bike are there', () => {
    test('when bike is built should have 2 wheels, 0 window, one seat and light', () => {
        const bikeBuilder: IVehicleBuilder = new BikeBuilder();
        const buildDirector = new VehicleBuildDirector(bikeBuilder);
        const bike = buildDirector.build().getVehicle();
        expect(bike.getLights()).toBe(1);
        expect(bike.getWheels()).toBe(2);
        expect(bike.getWindows()).toBe(0);
        expect(bike.getSeats()).toBe(1);
    });
});

describe('Building a car sanity test', () => {
    test('should be able to build a car without any problems', () => {
        const carBuilder: IVehicleBuilder = new CarBuilder();
        const buildDirector: VehicleBuildDirector = new VehicleBuildDirector(carBuilder);
        buildDirector.build();
        expect(buildDirector.getVehicle()).toBeTruthy();
    })
})

describe('Building a car check all properties of car are there', () => {
    test('when car is built should have 4 wheels, 4 windows, 4 seats and 4 lights', () => {
        const carBuilder: IVehicleBuilder = new CarBuilder();
        const buildDirector: VehicleBuildDirector = new VehicleBuildDirector(carBuilder);
        const car = buildDirector.build().getVehicle();
        expect(car.getLights()).toBe(4);
        expect(car.getWheels()).toBe(4);
        expect(car.getWindows()).toBe(4);
        expect(car.getSeats()).toBe(4);
    })
})