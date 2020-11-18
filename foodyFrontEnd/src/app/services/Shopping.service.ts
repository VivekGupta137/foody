import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/Ingredient.model';
import { Order } from '../model/order.model';
import { OrderService } from './Order.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{

  private ingredients: Ingredient[] = [];
  public ingredientLoaded: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  constructor(private orderService: OrderService){}


  getIngredients(): Ingredient[]{
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientLoaded.emit(this.ingredients);
  }

  addIngredients(ingredient: Ingredient[]){
    for(let igt of ingredient){
      this.ingredients.push(igt);
    }
    this.ingredientLoaded.emit(this.ingredients);
  }

  purchase(order: Order){
    this.orderService.addOrder(order);
  }

  clear() {
    this.ingredients = [];
    this.ingredientLoaded.emit(this.ingredients.slice());
  }
}
