import VehicleFactory from "./vehicleFactory";

describe('getVehicle method of Vehicle factory with parameter Audi Car', () => {
    test('should return audi car instance and drive should return "Driving an Audi" value', () => {
        const audiCar = VehicleFactory.getVehicle('Audi Car');
        expect(audiCar).toBeDefined();
        expect(audiCar?.drive()).toBe('Driving an Audi');
    });
});

describe('getVehicle method of Vehicle factory with parameter VW Car', () => {
    test('should return audi car instance and drive should return "Driving a VW" value', () => {
        const vwCar = VehicleFactory.getVehicle('VW Car');
        expect(vwCar).toBeDefined();
        expect(vwCar?.drive()).toBe('Driving a VW');
    });
});

describe('getVehicle method of Vehicle factory with parameter Cross Bike', () => {
    test('should return Cross bike instance and drive should return "Driving a Cross Bike" value', () => {
        const crossBike = VehicleFactory.getVehicle('Cross Bike');
        expect(crossBike).toBeDefined();
        expect(crossBike?.drive()).toBe('Driving a Cross Bike');
    });
});

describe('getVehicle method of Vehicle factory with parameter Banana white, unknown type', () => {
    test('should return undefined', () => {
        const unknownUndefined = VehicleFactory.getVehicle('Banana white');
        expect(unknownUndefined).toBeUndefined();
    });
});