import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test Desc 1',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT',
      [
        new Ingredient('Tofu', 1),
        new Ingredient('Rice', 100),
      ]
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Desc 2',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT',
      [
        new Ingredient('Vegetables', 5),
        new Ingredient('Noodles', 100),
      ]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
