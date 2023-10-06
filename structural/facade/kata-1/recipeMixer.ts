import { IIngredient } from "./iingredient";

export class RecipeMixer {        
    private ingredients: IIngredient[] = [];

    public mix(ingredient: IIngredient): void {
        this.ingredients.push(ingredient);
    }

    getRecipe(): string {
        if (this.ingredients.length > 1) {
            const lastIngredient = this.ingredients.pop();
            return this.ingredients.map(o => o.getName()).join(', ') + ' and ' + lastIngredient?.getName();
        }
        return this.ingredients.map(o => o.getName()).join('');
    }
}