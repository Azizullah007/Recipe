import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply for test.',
      'https://delightfuladventures.com/wp-content/uploads/2019/11/vegan-pinwheels-recipe.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply for test.',
      'https://delightfuladventures.com/wp-content/uploads/2019/11/vegan-pinwheels-recipe.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
