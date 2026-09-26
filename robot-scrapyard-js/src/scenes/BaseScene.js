class BaseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'BaseScene' });
    }

    preload() {
        this.load.image('player', '/assets/images/player.png');
    }

    create() {
        // Scene Setup
        const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
        this.physics.world.setBounds(0, 0, 1280, 720);
        // Player Sprite Setup
        this.physics.add.sprite(centerX, centerY - 45, 'player').setScale(0.5);

        // Player Stat Upgrades
        // Speed
        const playerSpeedLabel = this.add.rectangle(centerX + 375, centerY + 50, 200, 50, 0x363636);
		const playerSpeedLabelText = this.add.text(centerX + 375, centerY + 50, 'Speed', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerSpeedUp = this.add.rectangle(centerX + 500, centerY + 50, 50, 50, 0x57f774).setInteractive();
        const playerSpeedUpText = this.add.text(centerX + 500, centerY + 50, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5); 
        const playerSpeedDown = this.add.rectangle(centerX + 250, centerY + 50, 50, 50, 0xff3b3b).setInteractive();
        const playerSpeedDownText = this.add.text(centerX + 250, centerY + 50, '-', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);

        // Weapon Dmg
        const playerDmgLabel = this.add.rectangle(centerX + 375, centerY - 50, 200, 50, 0x363636);
		const playerDmgLabelText = this.add.text(centerX + 375, centerY - 50, 'Weapon Dmg', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerDmgUp = this.add.rectangle(centerX + 500, centerY - 50, 50, 50, 0x57f774).setInteractive();
        const playerDmgUpText = this.add.text(centerX + 500, centerY - 50, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5);
        const playerDmgDown = this.add.rectangle(centerX + 250, centerY - 50, 50, 50, 0xff3b3b).setInteractive();
        const playerDmgDownText = this.add.text(centerX + 250, centerY - 50, '-', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);

        // Armor
        const playerArmorLabel = this.add.rectangle(centerX + 375, centerY - 150, 200, 50, 0x363636);
		const playerArmorLabelText = this.add.text(centerX + 375, centerY - 150, 'Armor', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerArmorUp = this.add.rectangle(centerX + 500, centerY - 150, 50, 50, 0x57f774).setInteractive();
        const playerArmorUpText = this.add.text(centerX + 500, centerY - 150, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5);
        const playerArmorDown = this.add.rectangle(centerX + 250, centerY - 150, 50, 50, 0xff3b3b).setInteractive();
        const playerArmorDownText = this.add.text(centerX + 250, centerY - 150, '-', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);

        // Game Button
		const gameButton = this.add.rectangle(centerX + 500, centerY + 300, 200, 50, 0x363636).setInteractive();
		const gameButtonText = this.add.text( centerX + 500, centerY + 300, 'Go To Arena', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
		// This changes the scene from 'BaseScene' to 'GameScene'
		gameButton.on('pointerup', () => {
			this.scene.stop('BaseScene')
			this.scene.start('GameScene')
		});
        // Return to Start Scene
        this.add.text( centerX, (centerY - 300), 'BACKSPACE to return to Start Screen', {fill: '#ffffff', fontSize: '15px'}).setOrigin(0.5);
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('BaseScene')
			this.scene.start('StartScene')
		});
    }

    update() {

    }
}