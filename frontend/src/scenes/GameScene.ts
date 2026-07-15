import Phaser from "phaser";

import { Grid } from "../engine/grid/Grid";
import { GridRenderer } from "../engine/grid/GridRenderer";

export class GameScene extends Phaser.Scene {

    constructor() {

        super("game");

    }

    create() {

        this.cameras.main.setBackgroundColor("#2b2b2b");

        this.add.text(

            this.scale.width / 2,

            60,

            "ARROWSTICINI",

            {

                fontSize: "36px",

                color: "#ffffff",

                fontStyle: "bold"

            }

        ).setOrigin(.5);

        const grid = new Grid(3,3);

        const renderer = new GridRenderer(this);

        renderer.render(grid);

    }

}