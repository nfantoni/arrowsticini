import Phaser from 'phaser';

import { gameConfig } from '../src/config/GameConfig';

export class ArrowsticiniGame {

    private game: Phaser.Game;

    constructor() {

        this.game = new Phaser.Game(gameConfig);

    }

}