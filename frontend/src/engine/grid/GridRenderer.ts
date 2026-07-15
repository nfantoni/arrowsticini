import Phaser from "phaser";
import { Grid } from "./Grid";

export class GridRenderer {

    constructor(
        private readonly scene: Phaser.Scene
    ) {}

    render(grid: Grid) {

        const width = this.scene.scale.width;
        const height = this.scene.scale.height;

        const horizontalMargin = 30;
        const topMargin = 170;
        const bottomMargin = 40;

        const availableWidth = width - horizontalMargin * 2;
        const availableHeight = height - topMargin - bottomMargin;

        const cellSize = Math.min(
            availableWidth / grid.columns,
            availableHeight / grid.rows
        );

        const gridWidth = cellSize * grid.columns;
        const gridHeight = cellSize * grid.rows;

        const startX = (width - gridWidth) / 2;
        const startY = topMargin;

        grid.forEach(tile => {

            this.scene.add.rectangle(

                startX + tile.column * cellSize,
                startY + tile.row * cellSize,

                cellSize - 10,
                cellSize - 10,

                0x4d4d4d

            )
            .setOrigin(0)
            .setStrokeStyle(2, 0xffffff);

        });

    }

}