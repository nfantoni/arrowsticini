import { Food } from "../entities/Food";

export class CookingSystem {

    constructor(
        private readonly foods: Food[]
    ) {}

    update(delta: number) {

        this.foods.forEach(food => food.update(delta));

    }

}