import { Chain } from './chain';
import { FirstHandler } from './firstHandler';
import { SecondHandler } from './secondHandler';
import { ThirdHandler } from './thirdHandler';

describe('When text "This should be handled by first handler"', () => {
    test('should return "handled by first handler"', () => {
        const chain = new Chain();
        chain.setNext(new FirstHandler());
        expect(chain.handle('This should be handled by first handler')).toBe('handled by first handler');
    });
});

describe('When text "This should be handled by second handler"', () => {
    test('should return "handled by second handler"', () => {
        const chain = new Chain();
        const first = new FirstHandler()
        chain.setNext(first);
        const second = new SecondHandler();
        first.setNext(second);
        expect(chain.handle('This should be handled by second handler')).toBe('handled by second handler');
    });
});

describe('When text "Sent to third handler"', () => {
    test('should return "handled by third handler"', () => {
        const chain = new Chain();
        const first = new FirstHandler()
        chain.setNext(first);
        const second = new SecondHandler();
        first.setNext(second);
        const third = new ThirdHandler();
        second.setNext(third);
        expect(chain.handle('Sent to third handler')).toBe('handled by third handler');
    });
});