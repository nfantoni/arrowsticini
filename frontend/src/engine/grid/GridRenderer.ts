import Phaser from "phaser";
import { Grid } from "./Grid";

export class GridRenderer {

    constructor(
        private readonly scene: Phaser.Scene,
        private readonly grid: Grid
    ) {}

    render() {

        const width = this.scene.scale.width;
        const height = this.scene.scale.height;

        const margin = 20;

        const availableWidth = width - margin * 2;
        const availableHeight = height - 200;

        const cell = Math.min(
            availableWidth / this.grid.columns,
            availableHeight / this.grid.rows
        );

        const gridWidth = cell * this.grid.columns;
        const gridHeight = cell * this.grid.rows;

        const startX = (width - gridWidth) / 2;
        const startY = 140;

        this.grid.forEach(tile => {

            this.scene.add.rectangle(
                startX + tile.column * cell,
                startY + tile.row * cell,
                cell - 10,
                cell - 10,
                0x444444
            ).setOrigin(0);

        });

    }

}