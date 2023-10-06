import { IIngredient } from "./iingredient";

export class Flour implements IIngredient {
    getName(): string { 
        return 'flour'
    }
}