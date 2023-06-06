import { Subscription } from 'rxjs';
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopService } from '../shop.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('f') slForm!: NgForm;
subscription!: Subscription;
editMode: boolean = false;
editedItemIndex!: number;
editedItem!: Ingredient; 
  constructor(private shopService: ShopService) {}

  ngOnInit() {
    this.subscription = this.shopService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shopService.getIngredient(index);
    });
  }

  addNewIngredient(form : NgForm) { 
    const value = form.value;
    console.log(form);
    this.shopService.addIngredient(new Ingredient(value.name, value.amount, value.unit));
  }
}
