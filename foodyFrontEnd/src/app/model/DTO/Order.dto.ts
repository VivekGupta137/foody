import { IngredientDTO } from './Ingredient.dto';

export class OrderDTO {
  constructor(public id: number, public date: Date, public ingredientsList: IngredientDTO[]){}
}
