import { IIngredient } from "./iingredient";

export class Peper implements IIngredient {
    getName(): string { 
        return 'peper'
    }
}