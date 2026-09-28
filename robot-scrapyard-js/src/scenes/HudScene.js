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
		const controlsButton = this.add.rectangle(centerX - 500, centerY - 300, 200, 100, 0x363636);
		const controlsButtonText = this.add.text(centerX - 500, centerY - 300, `WASD:Move\nLFT-Click:Shoot`, {fill: '#ffffff', fontSize: '20px'}).setOrigin(0.5);
	}
}