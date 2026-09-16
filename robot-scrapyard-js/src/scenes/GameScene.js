class GameScene extends Phaser.Scene {
    #cursorKeys;
    #player;
    constructor() {
        super({ key: 'GameScene' });
    }
    preload() {
        // Basic format for adding image for preload
        //this.load.image('key for image', 'path to image');
    }
    create() {
        // // Player setup
        this.#player = this.physics.add.sprite(375, 300, 'player');
        this.#player.setCollideWorldBounds(true);   // Prevents player from going outside the world bounds
        this.#player.body.setMaxSpeed(100);
        // // Input setup (keys rebound to WASD instead of arrows)
        // const keys = this.input.keyboard.addKeys({
        //     up: Phaser.Input.Keyboard.KeyCodes.W,
        //     down: Phaser.Input.Keyboard.KeyCodes.S,
        //     left: Phaser.Input.Keyboard.KeyCodes.A,
        //     right: Phaser.Input.Keyboard.KeyCodes.D,
        // })
        this.#cursorKeys = this.input.keyboard.createCursorKeys();
        // // Mouse Aiming and setup
        // this.input.mouse.disableContextMenu();  // Disables the right-click for OS to prevent interference with gameplay
        // const pointer = this.input.activePointer;
        // const angle = Phaser.Math.Angle.Between(player.x, player.y, pointer.x, pointer.y);
        // player.setRotation(angle);

        // // Bullet Logic and Groups
        // const bullets = this.physics.add.group({
        //     defaultKey: 'bullet_img',
        //     maxSize: 30
        // });
        // const bulletSpeed = 200;

        // Placeholder Text
        this.add.text( 250, 50, 'BACKSPACE to return to Start', {fill: '#ffffff', fontSize: '15px'})
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('StartScene')
		})
        // End of Placeholder Text
    }
    update() {
        //Player Movement with remapped directional keys
        if (this.#cursorKeys.left.isDown) {
            this.#player.x -= 5;
        } else if (this.#cursorKeys.right.isDown) {
            this.#player.x += 5;
        }
        if (this.#cursorKeys.up.isDown) {
            this.#player.y -= 5;
        } else if (this.#cursorKeys.down.isDown) {
            this.#player.y += 5;
        }
    }
}