import { Ingredient } from './Ingredient.model';

export class Food{
  constructor(public name: string, public description: string, public imagePath: string, public ingredient: Ingredient[],public id?: number){}
}
