import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../core/recipe-service.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
// recipes: Recipe[] = [{
//   id:'r1',
//   title: 'Pongal',
//   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nagercoil_breakfast.jpg',
//   ingredients: ['rice','pulses']
// },
// {
//   id:'r2',
//   title: 'Coffee',
//   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Kumbakonam_Degree_Coffee_%2821693278089%29.jpg',
//   ingredients: ['milk','coffee', 'sugar']
// }];
  recipes: Recipe[]=[];
  constructor(private rsvc:RecipeServiceService) { }

  ngOnInit() {
    this.recipes = this.rsvc.getAllrecipes();
  }

}
