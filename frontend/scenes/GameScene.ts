import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {

    constructor() {

        super('game');

    }

    create() {

        this.add.text(

            195,

            400,

            'GAME SCENE',

            {

                fontSize: '32px',

                color: '#ffffff'

            }

        ).setOrigin(.5);

        this.input.once('pointerdown', () => {

            this.scene.start('end');

        });

    }

}
