import ICar from "./icar";

class GenericCar implements ICar {
    drive(): string {
        return 'Driving a generic car';
    }
}

class Audi implements ICar {
    drive(): string {
        return 'Driving an Audi';
    }
}

class Mercedes implements ICar {
    drive(): string {
        return 'Driving a Mercedes';
    }
}

class VW implements ICar {
    drive(): string {
        return 'Driving a VW';
    }
}

export default class CarFactory {
    static getCar(car: string): ICar {
        if (car.includes('Audi')) return new Audi();
        if (car.includes('Mercedes')) return new Mercedes();        
        if (car.includes('VW')) return new VW();
        return new GenericCar();
    }
}