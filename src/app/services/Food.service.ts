import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Food } from '../model/Food.model';
import { Ingredient } from '../model/Ingredient.model';
import { ShoppingService } from './Shopping.service';

@Injectable({
  providedIn: 'root'
})
export class FoodService{
  private foods: Food[] = [
    new Food("Chicken Tikka", "Indian tikka is a dish which consists of boneless meat, mostly chicken, that is cut into smaller pieces, and marinated in yogurt and traditional Indian spices such as turmeric, cumin, coriander, cayenne pepper, chili, garlic, and ginger.", "https://cdn.tasteatlas.com/Images/Dishes/ad88b52257ea4e96ab77e3508f6403be.jpg", [ new Ingredient("chiken", 1), new Ingredient("tikka masala", 3)] ),
    new Food("Roti", "Roti is a flat and unleavened bread made with wholemeal flour. It is traditionally cooked on an iron griddle called tava, an important vessel in the Indian cuisine. In Indian cuisine, roti is as essential as rice. There are several theories regarding its origin.", "https://cdn.tasteatlas.com/Images/Dishes/1bd5e63b79b344ef9b56cc6480470dba.jpg", [new Ingredient("flour", 2), new Ingredient("water", 1)]),
    new Food("Dal", "This flavorful and highly nutritious national dish of India is especially popular in southern parts of the country, but it can also be found in Nepal, Sri Lanka, Pakistan, and Bangladesh. Dal is a stew with the main ingredient of black or yellow lentils—the most consumed ingredients in India—but it can also be prepared with peas, chickpeas, or mung beans.","https://cdn.tasteatlas.com/images/dishes/fae65ee13027459b9f0b6793fb97634b.jpg", [new Ingredient("water", 3), new Ingredient("dal", 2)])
  ];

  foodsLoaded: EventEmitter<Food[]> = new EventEmitter<Food[]>();

  constructor(private http: HttpClient, private shoppingService: ShoppingService){}

  getFoods(): Food[]{
    return this.foods.slice();
  }

  getFoodByIndex(id: number): Food{
    return this.foods[id];
  }

  sendToCart(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }
}
