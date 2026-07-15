import Phaser from 'phaser';

import { Grid } from '../src/engine/grid/Grid';
import { GridRenderer } from '../src/engine/grid/GridRenderer';

export class GameScene extends Phaser.Scene {

    constructor() {

        super('game');

    }

    create() {

        const grid = new Grid(3, 3);

        new GridRenderer(this, grid).render();

    }

}