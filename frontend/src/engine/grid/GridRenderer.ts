import Phaser from 'phaser';
import { Grid } from './Grid';

export class GridRenderer {

    constructor(
        private readonly scene: Phaser.Scene,
        private readonly grid: Grid
    ) {}

    render() {

        const cell = 90;

        const offsetX = 60;

        const offsetY = 180;

        this.grid.forEach(tile => {

            this.scene.add.rectangle(

                offsetX + tile.column * cell,

                offsetY + tile.row * cell,

                70,

                70,

                0x444444

            ).setOrigin(0);

        });

    }

}