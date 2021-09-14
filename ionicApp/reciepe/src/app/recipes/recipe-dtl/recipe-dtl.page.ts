import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeServiceService } from 'src/app/core/recipe-service.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-dtl',
  templateUrl: './recipe-dtl.page.html',
  styleUrls: ['./recipe-dtl.page.scss'],
})
export class RecipeDtlPage implements OnInit {
  recipe: Recipe;
  constructor(private avRoute: ActivatedRoute,
  private rSvc:RecipeServiceService) { }

  ngOnInit() {
    this.avRoute.paramMap.subscribe(prams => {
      if (!prams.has('recipeId')) {
        return;
      }
      const rID = prams.get('recipeId');
      this.recipe = this.rSvc.getRecipe(rID.trim());
    })
  }

}
