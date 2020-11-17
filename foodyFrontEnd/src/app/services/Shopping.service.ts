import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/Ingredient.model';
import { Order } from '../model/order.model';
import { OrderService } from './Order.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService{

  private ingredients: Ingredient[] = [
    new Ingredient("ingredient 1", 2),
    new Ingredient("ingredient 2", 3),
    new Ingredient("ingredient 3", 5),
    new Ingredient("ingredient 4", 1),
  ];
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
