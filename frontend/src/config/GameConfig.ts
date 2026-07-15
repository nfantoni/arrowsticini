import Phaser from 'phaser';

import { BootScene } from '../scenes/BootScene';
import { MenuScene } from '../scenes/MenuScene';
import { GameScene } from '../scenes/GameScene';
import { EndScene } from '../scenes/EndScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {

    type: Phaser.AUTO,

    width: 390,

    height: 844,

    parent: 'app',

    backgroundColor: '#1E1E1E',

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    },

    scene: [
        BootScene,
        MenuScene,
        GameScene,
        EndScene
    ]

};