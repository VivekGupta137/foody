import { Ingredient } from '../Ingredient.model';

export class IngredientDTO{
  constructor(public id:number, public name: string, public amount: number){}

}
