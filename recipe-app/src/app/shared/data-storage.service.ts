import { Recipe } from './../recipes/recipe.model';
import { Http, Response } from '@angular/http';
import { RecipeService } from './../recipes/recipe.service';

import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipe() {
    return this.http.put('https://ng-recipe-book-f370f.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    return this.http.get('https://ng-recipe-book-f370f.firebaseio.com/recipes.json')
        .map(
          (response: Response) => {
            const recipes: Recipe[] = response.json();
            for (let recipe of recipes) {
              if (!recipe['ingredients']) {
                recipe['ingredients'] = [];
              }
            }
            return recipes;
          }
        )
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipeService.setRecipes(recipes);
          }
        );
  }
}
