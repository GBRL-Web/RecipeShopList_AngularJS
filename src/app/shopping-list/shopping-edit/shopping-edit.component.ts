import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef!: ElementRef;
  @ViewChild('amountInput') amountInputRef!: ElementRef;
  @ViewChild('unitInput') unitInputRef!: ElementRef;

  constructor(private shopService: ShopService) {}

  addNewIngredient() { 
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const unit = this.unitInputRef.nativeElement.value;
    this.shopService.addIngredient(new Ingredient(name, amount, unit));
  }
}
