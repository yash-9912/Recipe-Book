import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a recipe 1 description', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=556,505'),
    new Recipe('Recipe 2', 'This is a recipe 2 description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtnFZZiW6hCyPLK8PrOY1xLkpSzEo7mnhKUA&usqp=CAU')
  ];
}
