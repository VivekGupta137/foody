import { HttpClient, HttpResponse } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants.token';
import { Food } from '../model/Food.model';
import { Ingredient } from '../model/Ingredient.model';
import { ShoppingService } from './Shopping.service';

import {map, subscribeOn, tap} from 'rxjs/operators';
import { FoodDTO } from '../model/DTO/Food.dto';
import { IngredientDTO } from '../model/DTO/Ingredient.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService{
  private foods: Food[] = [];
  // private foods: Food[] = [
  //   new Food("Chicken Tikka", "Indian tikka is a dish which consists of boneless meat, mostly chicken, that is cut into smaller pieces, and marinated in yogurt and traditional Indian spices such as turmeric, cumin, coriander, cayenne pepper, chili, garlic, and ginger.", "https://cdn.tasteatlas.com/Images/Dishes/ad88b52257ea4e96ab77e3508f6403be.jpg", [ new Ingredient("chiken", 1), new Ingredient("tikka masala", 3)] ),
  //   new Food("Roti", "Roti is a flat and unleavened bread made with wholemeal flour. It is traditionally cooked on an iron griddle called tava, an important vessel in the Indian cuisine. In Indian cuisine, roti is as essential as rice. There are several theories regarding its origin.", "https://cdn.tasteatlas.com/Images/Dishes/1bd5e63b79b344ef9b56cc6480470dba.jpg", [new Ingredient("flour", 2), new Ingredient("water", 1)]),
  //   new Food("Dal", "This flavorful and highly nutritious national dish of India is especially popular in southern parts of the country, but it can also be found in Nepal, Sri Lanka, Pakistan, and Bangladesh. Dal is a stew with the main ingredient of black or yellow lentils—the most consumed ingredients in India—but it can also be prepared with peas, chickpeas, or mung beans.","https://cdn.tasteatlas.com/images/dishes/fae65ee13027459b9f0b6793fb97634b.jpg", [new Ingredient("water", 3), new Ingredient("dal", 2)])
  // ];


  foodsLoaded: EventEmitter<Food[]> = new EventEmitter<Food[]>();

  foodDto: FoodDTO[] = [];


  constructor(private http: HttpClient, private shoppingService: ShoppingService, @Inject(BACKEND_URL)  private url: string){}

  getFoods(): Observable<Food[]>{
    return this.http
    .get<FoodDTO[]>(this.url+"api/foods")
    .pipe(
      map(response => {
        let foodfromdto: Food[] = [];
        for(let res of response){
          if(res.ingredientsList == null)
            res.ingredientsList = [];
          foodfromdto.push(this.transformToFood(res));
        }
        return foodfromdto;
      })
    );
    // return this.foods.slice();
  }

  transformToFood(dto: FoodDTO): Food{
    return new Food(dto.name,dto.description,dto.imagepath,this.transformToIngredientArray(dto.ingredientsList),dto.id);
  }
  transformToIngredient(dto: IngredientDTO): Ingredient{
    return new Ingredient(dto.name,dto.amount,dto.id);
  }
  transformToIngredientArray(dto: IngredientDTO[]): Ingredient[]{
    let ingredient: Ingredient[] = [];
    for (let i = 0; i < dto.length; i++) {
      ingredient.push(new Ingredient(dto[i].name, dto[i].amount, dto[i].id));
    }
    return ingredient;
  }

  getFoodByIndex(id: number): Observable<Food>{
    return this.http
    .get<FoodDTO>(this.url+"api/foods/"+id)
    .pipe(
      map(response => {
        if(response.ingredientsList == null)
          response.ingredientsList = [];

        return this.transformToFood(response);
      }),
      tap(response => console.log(response))
    );
  }

  sendToCart(ingredients: Ingredient[]){
    this.shoppingService.addIngredients(ingredients);
  }

  deleteTheFood(id: number){
    this.http.delete(this.url+"api/foods/"+id)
    .subscribe(response=>console.log(response));
  }
}
