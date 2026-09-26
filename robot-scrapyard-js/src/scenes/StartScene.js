class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }
	preload() {
		
	}
    create() {
		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
		const titleText = this.add.text( centerX, (centerY - 150), 'Robot Scrapyard JS', {fill: '#ffffff', fontSize: '50px'}).setOrigin(0.5);
		// The title splash text
		const randInt = Phaser.Math.Between(0, 3);
		const startText = ['IN A VAN DOWN BY THE RIVER', 'VEGAN FRIENDLY', 'NOT ROBOT FRIENDLY', 'MADE IN 2026'];
		const splashText = this.add.text( centerX, (centerY - 100), startText[randInt], {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		// This tween animation causes the startText to flash
		this.tweens.add({
			targets: splashText,
			alpha: 0,
			duration: 1000,
			ease: 'Linear',
			yoyo: true,
			repeat: -1
		});
		// Base Button
		const baseButton = this.add.rectangle(centerX, centerY, 200, 50, 0x363636).setInteractive();
		const baseButtonText = this.add.text(centerX, centerY, 'Go To Base', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		baseButton.on('pointerup', () => {
			this.scene.stop('StartScene')
			this.scene.start('BaseScene')
		});
	}
}