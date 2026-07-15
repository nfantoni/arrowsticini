import { CookingState } from "../../types/CookingState";
import { Tile } from "../../engine/grid/Tile";

export class Food {

    public elapsed = 0;

    public state = CookingState.RAW;

    constructor(
        public readonly tile: Tile,
        public readonly duration: number = 8000
    ) {}

    update(delta: number) {

        this.elapsed += delta;

        const progress = this.elapsed / this.duration;

        if (progress < 0.25) {

            this.state = CookingState.RAW;

        } else if (progress < 0.60) {

            this.state = CookingState.COOKING;

        } else if (progress < 0.85) {

            this.state = CookingState.PERFECT;

        } else {

            this.state = CookingState.BURNT;

        }

    }

}