import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShopService {
  ingredientsChange: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  private ingredients: Ingredient[] = [
    new Ingredient('Bread', 1, 'kg'),
    new Ingredient('Cheese', 1, 'kg'),
    new Ingredient('Milk', 1, 'kg'),
    new Ingredient('Eggs', 1, 'kg'),
    new Ingredient('Butter', 1, 'kg'),
    new Ingredient('Sugar', 1, 'kg'),
  ];

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
