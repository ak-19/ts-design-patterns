import { IIngredient } from "./iingredient";

export class Eggs implements IIngredient {
    getName(): string { 
        return 'eggs'
    }
}