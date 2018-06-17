import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
