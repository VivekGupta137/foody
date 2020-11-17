import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/model/Ingredient.model';
import { ShoppingService } from 'src/app/services/Shopping.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  containsError: boolean = false;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }
  addIngredient(form: NgForm){
    if(form.value.name == "" || form.value.amount == ""){
      this.containsError = true;
      return;
    }
    this.shoppingService.addIngredient(new Ingredient( form.value.name, form.value.amount ));
  }
}
