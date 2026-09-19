class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }
	preload() {
		
	}
    create() {
		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
		// The title splash text
		const titleText = this.add.text( centerX, (centerY - 150), 'Robot Scrapyard', {fill: '#ffffff', fontSize: '30px'}).setOrigin(0.5);
		const startText = this.add.text( (centerX), (centerY - 100), 'Press SPACE to start!', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		// This tween animation causes the startText to flash
		this.tweens.add({
			targets: startText,
			alpha: 0,
			duration: 1000,
			ease: 'Linear',
			yoyo: true,
			repeat: -1
		})
		// This changes the scene from 'StartScene' to 'GameScene'
		this.input.keyboard.on('keydown-SPACE', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
		// This section handles the global variables needed for the game using the built-in Phaser 'Registry'
		// Currently unsure if I'll use the Registry or a gameState object
		//this.registry.set('currentScrap', 0);
	}
}