import { RecipeMixer } from './recipeMixer';
import { Eggs } from './eggs.ingredient';
import { Flour } from './flour.ingredient';
import { Salt } from './salt.ingredient';
import { Oliveoil } from './oliveoil.ingredient';
import { Peper } from './peper.ingredient';

describe('Recipe mixer sanity test',  () => {
    test('Should mix ingredients without any errors', () => { 
        const recipeMixer = new RecipeMixer();
        recipeMixer.mix(new Salt());
        recipeMixer.mix(new Peper());
        recipeMixer.mix(new Oliveoil());
    });
});

describe('When mixer gets ingridients in this order: flour, olive oil, salt, peper and eggs',  () => {
    test('Should return recipe "flour, olive oil, salt, peper and eggs"', () => { 
        const recipeMixer = new RecipeMixer();

        recipeMixer.mix(new Flour());
        recipeMixer.mix(new Oliveoil());
        recipeMixer.mix(new Salt());
        recipeMixer.mix(new Peper());
        recipeMixer.mix(new Eggs());

        expect(recipeMixer.getRecipe()).toBe('flour, olive oil, salt, peper and eggs');
    });
});

describe('When mixer gets out of ingridients just salt',  () => {
    test('Should return recipe "salt"', () => { 
        const recipeMixer = new RecipeMixer();
    
        recipeMixer.mix(new Salt());    

        expect(recipeMixer.getRecipe()).toBe('salt');
    });
});

describe('When mixer gets out of ingridients just salt and peper',  () => {
    test('Should return recipe "salt and peper"', () => { 
        const recipeMixer = new RecipeMixer();
    
        recipeMixer.mix(new Salt());    
        recipeMixer.mix(new Peper());    

        expect(recipeMixer.getRecipe()).toBe('salt and peper');
    });
});