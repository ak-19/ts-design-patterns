import { IRegular } from "./iregular";
import { ReverseToRegularAdapter } from "./reverseToRegularAdapter";
import { ReverseNamer } from './reverseNamer';

describe('When ReverseToRegularAdapter is initialized with ReverseNamer', () => {
    test('should return regular non reversed names', () => {
        const regularForm: IRegular  = new ReverseToRegularAdapter(new ReverseNamer());
        expect(regularForm.regularName()).toBe('Joe');
        expect(regularForm.regularName()).toBe('John');
        expect(regularForm.regularName()).toBe('Jane');
        expect(regularForm.regularName()).toBe('Jill');
    });
});