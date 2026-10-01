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

        // Player Setup
        this.physics.add.sprite(centerX, centerY - 45, 'player').setScale(0.5);
        let score = this.registry.values.score;
        let ammo = this.registry.values.ammo;
        // Event Listener
        this.registry.events.on('changedata-score', (parent, value) => {
            this.score += value;
        });

        // Ammo
        const playerAmmoLabel = this.add.rectangle(centerX - 375, centerY - 150, 200, 50, 0x363636);
		const playerAmmoLabelText = this.add.text(centerX - 375, centerY - 150, 'Ammo', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerAmmoUp = this.add.rectangle(centerX - 250, centerY - 150, 50, 50, 0x57f774).setInteractive();
        const playerAmmoUpText = this.add.text(centerX - 250, centerY - 150, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5); 
        playerAmmoUp.on('pointerdown', () => {
            if (score >= 10) {
                this.registry.inc('ammo', 10);
                this.registry.inc('score', -10);
                console.log('10 ammo added.');
            } else {
                console.log('Not enough score for more ammo.');
            }
        });

        // Speed
        const playerSpeedLabel = this.add.rectangle(centerX + 375, centerY + 50, 200, 50, 0x363636);
		const playerSpeedLabelText = this.add.text(centerX + 375, centerY + 50, 'Speed', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerSpeedUp = this.add.rectangle(centerX + 500, centerY + 50, 50, 50, 0x57f774).setInteractive();
        const playerSpeedUpText = this.add.text(centerX + 500, centerY + 50, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5); 
        playerSpeedUp.on('pointerdown', () => {
            if (score >= 100) {
                this.registry.inc('playerSpeed', 15);
                this.registry.inc('score', -100);
                console.log('Speed upgraded.');
            } else {
                console.log('Not enough score to upgrade speed.');
            }
        });

        // Weapon Dmg
        const playerDmgLabel = this.add.rectangle(centerX + 375, centerY - 50, 200, 50, 0x363636);
		const playerDmgLabelText = this.add.text(centerX + 375, centerY - 50, 'Weapon Dmg', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerDmgUp = this.add.rectangle(centerX + 500, centerY - 50, 50, 50, 0x57f774).setInteractive();
        const playerDmgUpText = this.add.text(centerX + 500, centerY - 50, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5);
        playerDmgUp.on('pointerdown', () => {
            if (score >= 100) {
                this.registry.inc('weaponDmg', 15);
                this.registry.inc('score', -100);
                console.log('Damage upgraded.');
            } else {
                console.log('Not enough score to upgrade damage.');
            }
        });

        // Armor
        const playerArmorLabel = this.add.rectangle(centerX + 375, centerY - 150, 200, 50, 0x363636);
		const playerArmorLabelText = this.add.text(centerX + 375, centerY - 150, 'Armor', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        const playerArmorUp = this.add.rectangle(centerX + 500, centerY - 150, 50, 50, 0x57f774).setInteractive();
        const playerArmorUpText = this.add.text(centerX + 500, centerY - 150, '+', {fill: '#000000', fontSize: '20px'}).setOrigin(0.5);
        playerArmorUp.on('pointerdown', () => {
            if (score >= 100) {
                this.registry.inc('armor', 15);
                this.registry.inc('score', -100);
                console.log('Armor upgraded.');
            } else {
                console.log('Not enough score to upgrade armor.');
            }
        });

        // Game Button
		const gameButton = this.add.rectangle(centerX + 500, centerY + 300, 200, 50, 0x363636).setInteractive();
		const gameButtonText = this.add.text( centerX + 500, centerY + 300, 'Fight', {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        
		// This changes the scene from 'BaseScene' to 'GameScene'
		gameButton.on('pointerup', () => {
			this.scene.stop('BaseScene')
			this.scene.start('GameScene')
		});
        // Return to Start Scene
        this.add.text( centerX, (centerY - 300), 'BACKSPACE to return to Start Screen', {fill: '#ffffff', fontSize: '15px'}).setOrigin(0.5);
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('BaseScene')
            this.scene.stop('HudScene')
			this.scene.start('StartScene')
		});
    }

    update() {

    }
}