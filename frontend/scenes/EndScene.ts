import Phaser from 'phaser';

export class EndScene extends Phaser.Scene {

    constructor() {

        super('end');

    }

    create() {

        this.add.text(

            195,

            400,

            'GAME OVER',

            {

                fontSize: '32px',

                color: '#ffffff'

            }

        ).setOrigin(.5);

    }

}