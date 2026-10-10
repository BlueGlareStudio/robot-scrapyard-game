class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' });
    }
	preload() {
		this.load.image('button', 'assets/images/button.png');
	}
    create() {
		const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
		const titleText = this.add.text( centerX, (centerY - 150), 'Robot Scrapyard', {fill: '#ffffff', fontSize: '50px'}).setOrigin(0.5);
		// The title splash text
		const randInt = Phaser.Math.Between(0, 5);
		const startText = ['IN A VAN DOWN BY THE RIVER', 'VEGAN FRIENDLY', 'NOT ROBOT FRIENDLY', 'MADE WITH PHASER', 'BLUE GLARE STUDIO', 'ANTI-ROBOT PROPAGANDA'];
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
		const baseButton = this.add.image(centerX, centerY, 'button').setInteractive();
		const baseButtonText = this.add.text(centerX, centerY, 'Play', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		baseButton.on('pointerup', () => {
			this.scene.stop('StartScene')
			this.scene.start('HudScene')
			this.scene.start('BaseScene')
		});
		// Load Button
		const loadButton = this.add.image(centerX, centerY + 60, 'button').setInteractive();
		const loadButtonText = this.add.text(centerX, centerY + 60, 'Load', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		// Save Button
		const saveButton = this.add.image(centerX, centerY + 120, 'button').setInteractive();
		const saveButtonText = this.add.text(centerX, centerY + 120, 'Save', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);

		// Registry
		// //this.registry.set('armor', 0);
		// //this.registry.set('weaponDmg', 10);
		this.registry.set('playerSpeed', 100);
		// //this.registry.set('scrap', 0);
		// //this.registry.set('oil', 0);
		this.registry.set('score', 50);
        this.registry.set('ammo', 10);
	}
}