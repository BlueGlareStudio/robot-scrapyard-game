class HudScene extends Phaser.Scene {
    constructor() {
        super({ key: 'HudScene' });
    }

	preload() {
		
	}

    create() {
        // HUD Setup
        const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
        // Ammo
        let ammo = this.registry.values.ammo;
        let ammoText = this.add.text(centerX, (centerY - 200), `Ammo ${ammo}`, {fill: '#000000', fontSize: '25px'}).setOrigin(0.5);
        // Score
        let score = this.registry.values.score;
        let scoreText = this.add.text(centerX, centerY - 250, `Score ${score}`, {fill: '#000000', fontSize: '40px'}).setOrigin(0.5);
        // Controls
		const controlsButton = this.add.rectangle(centerX, centerY - 325, 500, 30, 0x363636);
		const hudText = this.add.text(centerX, centerY - 325, `WASD:Move LFT-Click:Shoot`, {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
        // Event Listener
        this.registry.events.on('changedata-score', (parent, value) => {
            scoreText.setText('Score ' + value);
        });
        this.registry.events.on('changedata-ammo', (parent, value) => {
            ammoText.setText('Ammo ' + value);
        });
	}
}