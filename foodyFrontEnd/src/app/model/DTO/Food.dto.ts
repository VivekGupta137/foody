import { Food } from '../Food.model';
import { Ingredient } from '../Ingredient.model';
import { IngredientDTO } from './Ingredient.dto';

export class FoodDTO{
  public constructor(public id: number,public name: string, public description: string, public imagepath: string, public ingredientsList: IngredientDTO[]){}

  // public toFood(): Food{
  //   let ingredients: Ingredient[] = [];
  //   for(let ingredient of this.ingredientsList){
  //     ingredients.push(ingredient.toIngredient());
  //   }
  //   return new Food(this.name,this.description,this.imagepath, ingredients, this.id);
  // }
}
