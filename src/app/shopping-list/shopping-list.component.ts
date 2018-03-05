import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Spring Onions', 6),
    new Ingredient('Chili', 4),
    new Ingredient('Chicken Breast', 2)
  ];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
