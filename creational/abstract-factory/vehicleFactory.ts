import ICar from './icar';
import IBike from './ibike';
import CarFactory from './carFactory';
import BikeFactory from './bikeFactory';

interface IVehicle extends ICar, IBike { }

export default class VehicleFactory {
    static getVehicle(vehicle: string): IVehicle | undefined {
        if (vehicle) {
            if (vehicle.includes('Car')) return CarFactory.getCar(vehicle)
            if (vehicle.includes('Bike')) return BikeFactory.getBike(vehicle)
        }
        return undefined;
    }
}