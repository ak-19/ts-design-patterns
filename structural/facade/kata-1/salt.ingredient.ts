import { IIngredient } from "./iingredient";

export class Salt implements IIngredient {
    getName(): string { 
        return 'salt'
    }
}