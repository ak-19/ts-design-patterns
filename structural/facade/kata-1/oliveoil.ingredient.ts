import { IIngredient } from "./iingredient";

export class Oliveoil implements IIngredient {
    getName(): string { 
        return 'olive oil'
    }
}