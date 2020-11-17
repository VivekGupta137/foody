import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Food } from 'src/app/model/Food.model';
import { Ingredient } from 'src/app/model/Ingredient.model';
import { FoodService } from 'src/app/services/Food.service';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  food: Food;

  constructor(private activeRoute: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.food = this.foodService.getFoodByIndex(+param.id);
      }
    );
  }

  addToCart(){
    this.foodService.sendToCart(this.food.ingredient);
  }
}
