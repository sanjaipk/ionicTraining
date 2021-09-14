import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  private recipes: Recipe[] = [{
    id:'r1',
    title: 'Pongal',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Nagercoil_breakfast.jpg',
    ingredients: ['rice','pulses']
  },
  {
    id:'r2',
    title: 'Coffee',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Kumbakonam_Degree_Coffee_%2821693278089%29.jpg',
    ingredients: ['milk','coffee', 'sugar']
  }];
  constructor() { }
  getAllrecipes() {
    return [...this.recipes];
  }
  getRecipe(rId:string) {
    return {
      ...this.recipes.find(res => {
        return res.id === rId;
      })
    };
  }
}
