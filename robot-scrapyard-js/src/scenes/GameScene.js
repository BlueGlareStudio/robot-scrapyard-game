class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
    preload() {
        // Basic format for adding image for preload
        //this.load.image('asset key', 'path to image');
        this.load.image('player', 'assets/images/player.png');
    }
    create() {
        // Player and Input Setup
        this.player = this.physics.add.sprite(200, 200, 'player').setScale(0.1);
        this.moveKeys = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D'
        });
        // Placeholder Text
        this.add.text( 250, 50, 'BACKSPACE to return to Start', {fill: '#ffffff', fontSize: '15px'})
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('StartScene')
		});
        // End of Placeholder Text
    }

    update() {
        let playerSpeed = 150;    // Default: 150
        if (this.moveKeys.left.isDown) {
            this.player.setFlipX(true);
            this.player.setVelocityX(-playerSpeed);
        } else if (this.moveKeys.right.isDown) {
            this.player.setFlipX(false);
            this.player.setVelocityX(playerSpeed);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.moveKeys.up.isDown) {
            this.player.setVelocityY(-playerSpeed);
        } else if (this.moveKeys.down.isDown) {
            this.player.setVelocityY(playerSpeed);
        } else {
            this.player.setVelocityY(0);
        }
    }
}