import { CarFactory } from './carFactory'
import { CarType } from "./carType";
import { CarVariation } from "./carVariation";
import { CarColor } from "./carColor";
import { ICar } from './icar';
import { Mercedes } from './mercedes';
import { BMW } from './bmw';
import { Audi } from './audi';

describe('Sanity test', () => {
    test('should intialize without any problems', () => {
        new CarFactory();
     });
});

describe('When type of mercedes, cabriolet, color red is made with car factory', () => {
    test('should return object of type ICar, type mercedes and red cabriolet', () => {
        const carFactory = new CarFactory();
        const car: ICar | undefined = carFactory.make(CarType.Mercedes, CarVariation.Cabriolet, CarColor.Red);
        expect(car).toBeDefined();
        expect(car).toBeInstanceOf(Mercedes);
        expect(car).toHaveProperty('color', CarColor.Red);
        expect(car).toHaveProperty('variation', CarVariation.Cabriolet);
    });
});

describe('When type of BMW, sedan, color silver is made with car factory', () => {
    test('should return object of type ICar, type BMW and silver sedan', () => {
        const carFactory = new CarFactory();
        const car: ICar | undefined = carFactory.make(CarType.BMW, CarVariation.Sedan, CarColor.Silver);
        expect(car).toBeDefined();
        expect(car).toBeInstanceOf(BMW);
        expect(car).toHaveProperty('color', CarColor.Silver);
        expect(car).toHaveProperty('variation', CarVariation.Sedan);
    });
});

describe('When type of Audi, Regular, color white is made with car factory', () => {
    test('should return object of type ICar, type Audi and white Regular', () => {
        const carFactory = new CarFactory();
        const car: ICar | undefined = carFactory.make(CarType.Audi, CarVariation.Regular, CarColor.White);
        expect(car).toBeDefined();
        expect(car).toBeInstanceOf(Audi);
        expect(car).toHaveProperty('color', CarColor.White);
        expect(car).toHaveProperty('variation', CarVariation.Regular);
    });
});