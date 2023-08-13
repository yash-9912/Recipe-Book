import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'Ingredient 1', amount: 50 },
    { name: 'Ingredient 2', amount: 100},
    { name: 'Ingredient 3', amount: 200}
  ]
}
