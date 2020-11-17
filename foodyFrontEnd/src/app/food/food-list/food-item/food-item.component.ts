import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/model/Food.model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input() food: Food;
  @Input() idx: number;
  shortDescription: string;
  constructor() { }

  ngOnInit(): void {
    let len: number = this.food.description.length;
    this.shortDescription = this.food.description.substr(0, len > 80? 80: len);
    if(len > this.shortDescription.length)
      this.shortDescription += "...";
    // console.log(this.idx);
  }

}
