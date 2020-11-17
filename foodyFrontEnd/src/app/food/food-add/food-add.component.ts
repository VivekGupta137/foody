import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from 'src/app/model/Food.model';
import { Ingredient } from 'src/app/model/Ingredient.model';
import { FoodService } from 'src/app/services/Food.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.css']
})
export class FoodAddComponent implements OnInit {

  ingredients: Ingredient[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
  }

  addFood(form: NgForm){
    console.log(form.value);
    let theFood: Food;
    theFood = new Food(form.value.name, form.value.description, form.value.imagepath, this.ingredients);
    this.foodService.addTheFood(theFood);
  }

  addIngredient(form: NgForm){
    if(form.value.ingredientname == "" || form.value.ingredientamount=="")
      return;
    this.ingredients.push(new Ingredient(form.value.ingredientname, +form.value.ingredientamount));
    console.log(form.value);
  }

}
