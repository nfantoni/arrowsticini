import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {

    constructor() {

        super('menu');

    }

    create() {

        this.add.text(

            195,

            180,

            'ARROWSTICINI',

            {

                fontSize: '40px',

                color: '#FFFFFF'

            }

        ).setOrigin(.5);

        const play = this.add.text(

            195,

            450,

            'PLAY',

            {

                fontSize: '32px',

                backgroundColor: '#ff9800',

                padding: {

                    left: 25,

                    right: 25,

                    top: 15,

                    bottom: 15

                }

            }

        ).setOrigin(.5);

        play.setInteractive();

        play.on('pointerdown', () => {

            this.scene.start('game');

        });

    }

}