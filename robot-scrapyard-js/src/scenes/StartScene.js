class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }
	preload() {
		
	}
    create() {
		// The title splash text
		const titleText = this.add.text( 250, 200, 'Robot Scrapyard', {fill: '#ffffff', fontSize: '30px'}) // 'Robot Scrapyard'
		const startText = this.add.text( 300, 275, 'Click to start!', {fill: '#ffffff', fontSize: '20px'}) // 'Click to start!'
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
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
		// This section handles the global variables needed for the game using the built-in Phaser 'Registry'
		// Currently unsure if I'll use the Registry or a gameState object
		//this.registry.set('currentScrap', 0);
	}
}