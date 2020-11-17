import { Ingredient } from './Ingredient.model';

export class Order{
  constructor(public orderId: number, public date: Date, public ingredients: Ingredient[]){}
}
