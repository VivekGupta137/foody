import { Component, OnInit } from '@angular/core';
import { Food } from '../model/Food.model';
import { FoodService } from '../services/Food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  theFood: Food[];

  constructor(private foodService: FoodService) {  }

  ngOnInit(): void {
    this.foodService.getFoods().subscribe(
      response => {
        this.theFood = response;
      });
  }

}
