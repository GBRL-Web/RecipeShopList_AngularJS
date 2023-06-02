import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShopService {
  ingredientsChange: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  private ingredients: Ingredient[] = [];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}
