import { Component, Input, OnInit } from '@angular/core';
import { Food } from 'src/app/model/Food.model';
import { FoodService } from 'src/app/services/Food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  @Input() foods: Food[];

  constructor() { }

  ngOnInit(): void {
  }

}
