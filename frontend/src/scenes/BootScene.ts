import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {

    constructor() {

        super('boot');

    }

    preload() {
        // Intenzionalmente vuoto o da implementare in seguito
    }

    create() {

        this.scene.start('menu');
        console.log(this.scene.manager.scenes);

    }

}