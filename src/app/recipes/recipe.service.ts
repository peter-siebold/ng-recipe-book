import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe( 'Adobo',
                'Adobo Dry Rub Seasoning',
    'https://fthmb.tqn.com/OeqsXfD6YFQ8qecHJ4IiEo3cRhU=/1280x860/filters:no_upscale()/11618850496_977c32d407_o-56a58b1c5f9b58b7d0dd4f8e.jpg'
              ),
    new Recipe('Pad Kra Prao', 'The famous fried basil with chicken dish',
    'https://migrationology.smugmug.com/Thai-Recipes/i-S5pmbsQ/0/X3/thai-chicken-basil-recipe-4-X3.jpg')

  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
