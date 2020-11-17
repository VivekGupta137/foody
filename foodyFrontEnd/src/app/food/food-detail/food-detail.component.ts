import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  foodResolved: boolean;

  constructor(private router: Router,private activeRoute: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodResolved = false;
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.foodService.getFoodByIndex(+param.id).subscribe(
          response => {
            this.foodResolved = true;
            this.food = response;
          }
        );
      }
    );
  }

  addToCart(){
    this.foodService.sendToCart(this.food.ingredient);
  }

  deleteTheRecipe(){
    // need to remove cors
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.foodService.deleteTheFood(+param.id);
      }
    );
    this.router.navigate([""]);
  }
}
