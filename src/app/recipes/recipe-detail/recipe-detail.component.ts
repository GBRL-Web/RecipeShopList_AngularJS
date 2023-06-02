import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
 selectedRecipe!: Recipe;
 id!: number;

 constructor(private recipeService: RecipeService, private route : ActivatedRoute) {}

ngOnInit() {
  this.route.params.subscribe(params => { 
    this.id = params['id'];
    this.selectedRecipe = this.recipeService.getRecipeById(this.id); 
  });
  
}
 transferIngredients(): void {
  this.recipeService.sendIngredients(this.selectedRecipe.ingredients);
 }
}
