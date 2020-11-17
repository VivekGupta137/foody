import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../model/Ingredient.model';
import { Order } from '../model/order.model';
import { ShoppingService } from '../services/Shopping.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientLoaded.subscribe(
      (ingredientArray: Ingredient[]) => {
        this.ingredients = ingredientArray;
      }
    );
  }

  saveToDB(){
    if(this.ingredients.length < 1) return;
    const order: Order = new Order(Math.floor((Math.pow(10, 5*Math.random()))*Math.random()), new Date(), this.ingredients);
    this.shoppingService.purchase(order);
    this.shoppingService.clear();
  }

}
