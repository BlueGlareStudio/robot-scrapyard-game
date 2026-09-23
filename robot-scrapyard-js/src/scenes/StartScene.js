class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }
	preload() {
		
	}
    create() {
		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
		const button = this.add.rectangle(centerX, centerY, 200, 50, 0xff0000).setInteractive();
		const randInt = Phaser.Math.Between(0, 3);
		const startText = ['IN A VAN DOWN BY THE RIVER', 'VEGAN FRIENDLY', 'NOT ROBOT FRIENDLY', 'MADE IN 2026'];
		// The title splash text
		const titleText = this.add.text( centerX, (centerY - 150), 'Robot Scrapyard', {fill: '#ffffff', fontSize: '30px'}).setOrigin(0.5);
		const splashText = this.add.text( centerX, (centerY - 120), startText[randInt], {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		const buttonText = this.add.text( centerX, centerY, 'START', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		// This tween animation causes the startText to flash
		this.tweens.add({
			targets: splashText,
			alpha: 0,
			duration: 1000,
			ease: 'Linear',
			yoyo: true,
			repeat: -1
		});
		// This changes the scene from 'StartScene' to 'GameScene'
		button.on('pointerup', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
	}
}