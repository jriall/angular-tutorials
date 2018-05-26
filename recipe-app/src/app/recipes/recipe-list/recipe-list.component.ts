import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test Desc 1',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Desc 2',
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/vegan-thai-curry.jpg?itok=8Il6uTfT'
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
