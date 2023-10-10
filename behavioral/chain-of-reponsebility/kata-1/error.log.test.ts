import { ErrorGeneric } from "./error.generic";
import { ErrorWild } from "./error.wild";
import { GenericLogger } from "./genericLogger";
import { WildLogger } from "./wildLogger";

describe('When generic error is passed to generic logger handle', () => {
    test('should return "This is generic error"', () => {
        const genericLogger  = new GenericLogger();
        expect(genericLogger.handle(new ErrorGeneric())).toBe('This is generic error');
    });
});

describe('When wild error is passed to wild logger handle', () => {
    test('should return "This is wild error"', () => {
        const wildLogger  = new WildLogger();
        expect(wildLogger.handle(new ErrorWild())).toBe('This is wild error');
    });
});


describe('When wild error is passed to generic logger that has wild logger as next', () => {
    test('should return "This is wild error"', () => {
        const wildLogger  = new WildLogger();
        const genericLogger  = new GenericLogger();
        genericLogger.nextLogger(wildLogger);
        expect(genericLogger.handle(new ErrorWild())).toBe('This is wild error');
    });
});