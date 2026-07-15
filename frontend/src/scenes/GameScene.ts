import Phaser from "phaser";

import { Grid } from "../engine/grid/Grid";
import { GridRenderer } from "../engine/grid/GridRenderer";

import { Food } from "../game/entities/Food";
import { CookingSystem } from "../game/systems/CookingSystem";
import { CookingState } from "../types/CookingState";

export class GameScene extends Phaser.Scene {

    private foods: Food[] = [];

    private graphics!: Phaser.GameObjects.Graphics;

    private cooking!: CookingSystem;

    constructor() {

        super('game');

    }

    create() {

        const grid = new Grid(3,3);

        new GridRenderer(this, grid).render();

        grid.forEach(tile => {

            this.foods.push(new Food(tile));

        });

        this.cooking = new CookingSystem(this.foods);

        this.graphics = this.add.graphics();

    }

    update(_: number, delta:number) {

        this.cooking.update(delta);

        this.graphics.clear();

        const cell = 90;
        const startX = 95;
        const startY = 215;

        this.foods.forEach(food=>{

            let color=0xffffff;

            switch(food.state){

                case CookingState.RAW:
                    color=0xffffff;
                    break;

                case CookingState.COOKING:
                    color=0xffcc00;
                    break;

                case CookingState.PERFECT:
                    color=0x8B4513;
                    break;

                case CookingState.BURNT:
                    color=0x000000;
                    break;

            }

            this.graphics.fillStyle(color);

            this.graphics.fillCircle(
                startX + food.tile.column*90,
                startY + food.tile.row*90,
                25
            );

        });

    }

}