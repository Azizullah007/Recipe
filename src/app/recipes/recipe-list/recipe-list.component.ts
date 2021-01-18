import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply for test.',
      'https://delightfuladventures.com/wp-content/uploads/2019/11/vegan-pinwheels-recipe.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply for test.',
      'https://delightfuladventures.com/wp-content/uploads/2019/11/vegan-pinwheels-recipe.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}