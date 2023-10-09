import { IRegular } from "./iregular";
import { ReverseNamer } from "./reverseNamer";

export class ReverseToRegularAdapter implements IRegular {
    constructor(private readonly reverseName: ReverseNamer) {}

    regularName(): string {
        return this.reverseName.getName().split('').reverse().join('');
    }
}