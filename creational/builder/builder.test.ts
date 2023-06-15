import BuildDirector from "./buildDirector";
import CabrioBuilder from "./cabrioBuilder";
import Car from "./car";

describe('When to build director is passed Cabrio builder', () => {
    test('should return instance of car that doesnt have roof', () => {
        const cabrioBuildDirector = new BuildDirector(new CabrioBuilder());
        const car = cabrioBuildDirector.buildCar();
        expect(car).toBeInstanceOf(Car);
        expect(car.Roof).toBeFalsy();
    });
});