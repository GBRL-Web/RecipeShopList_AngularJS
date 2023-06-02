import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/models/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShopService } from "../shopping-list/shop.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes : Recipe[] = [
        new Recipe('Chicken Breast', 'Chicken broth vapor cooked chicken breast for 4 people', '../../../assets/food.png', [
          new Ingredient('Chicken', 1, 'kg'),
          new Ingredient('Salt', 0.5, 'tbsp'),
          new Ingredient('Chicken Broth', 200, 'ml'),
        ]), 
        new Recipe('Tiramisu', 'Tiramisu for 8 people', '../../../assets/food.png', [ 
          new Ingredient('Tiramisu biscuits', 1, 'pack'),
          new Ingredient('Coffee', 3, 'cups'),
          new Ingredient('Water', 400,'ml'),
          new Ingredient('Sugar', 100, 'g'),
          new Ingredient('Philadelphia cheese', 400, 'g'),
        ]),
        new Recipe('Chicken Breast', 'Chicken broth vapor cooked chicken breast for 4 people', '../../../assets/food.png', [
          new Ingredient('Chicken', 1, 'kg'),
          new Ingredient('Salt', 0.5, 'tbsp'),
          new Ingredient('Chicken Broth', 200,'ml'),
        ]),
        new Recipe('Tiramisu', 'Tiramisu for 8 people', '../../../assets/food.png', [ 
          new Ingredient('Tiramisu biscuits', 1, 'pack'),
          new Ingredient('Coffee', 3, 'cups'),
          new Ingredient('Water', 400,'ml'),
          new Ingredient('Sugar', 100, 'g'),
          new Ingredient('Philadelphia cheese', 400, 'g'),
        ]),
      ];

      constructor(private slService: ShopService) {}

      sendIngredients(ingredients : Ingredient[]) {
        this.slService.addIngredients(ingredients);
       }

      getRecipes() : Recipe[] {
        return this.recipes.slice();
      }

      getRecipeById(id: number) : Recipe {
        return this.recipes[id];
      }
}