import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { IngredientDTO } from '../model/DTO/Ingredient.dto';
import { OrderDTO } from '../model/DTO/Order.dto';
import { Ingredient } from '../model/Ingredient.model';
import { Order } from '../model/order.model';

@Injectable({providedIn: 'root'})
export class UtilityService{

  transformToOrderDTO(order: Order): OrderDTO{
    let dto : OrderDTO;
    dto = new OrderDTO(order.orderId,order.date,this.transformToIngredientDTOArray(order.ingredients));
    return dto;
  }
  transformToIngredientDTO(idt: Ingredient): IngredientDTO{
    let dto : IngredientDTO;
    dto = new IngredientDTO(idt.id,idt.name, idt.amount);
    return dto;
  }
  transformToIngredientDTOArray(idt: Ingredient[]): IngredientDTO[]{
    let dto : IngredientDTO[] = [];
    for(let ing of idt){
      dto.push(this.transformToIngredientDTO(ing));
    }
    return dto;
  }
  transformToOrder(dto: OrderDTO): Order{
    let order : Order;
    order = new Order(dto.id, dto.date, this.transformToIngredientArray(dto.ingredientsList));
    return order;
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

}
