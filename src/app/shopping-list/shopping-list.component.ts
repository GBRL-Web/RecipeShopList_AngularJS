import { Component } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent {
ingredients: Ingredient[] = [];

constructor(private shopService: ShopService) {}

ngOnInit() {
  this.ingredients = this.shopService.getIngredients();
  this.shopService.ingredientsChange.subscribe((ingredients: Ingredient[]) => {
    this.ingredients = ingredients;
  });
}

onIngredientAdded(ingredient: Ingredient) {
  this.shopService.addIngredient(ingredient);
}
}
