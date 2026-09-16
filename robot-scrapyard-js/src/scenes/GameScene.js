// import Player from '..entities/player';
// import Inventory from '.data/inventory.js';
// import BulletManager from '../entities/bulletmanager.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }
    preload() {
        // Basic format for adding image for preload
        //this.load.image('asset key', 'path to image');
    }
    create() {
        player = this.physics.add.sprite(200, 200, 'player');
        cursors = input.keyboard.createCursorKeys();
        player.setCollideWorldBounds(true);    // Prevents player from going outside the world bounds
        player.body.setSize(20, 20)
        // Game and Player Setup
        // this.inventory = new Inventory();
        // this.player = new Player(this, 375, 300);
        // this.weaponSystem = new BulletManager(this);

        // Handle pointer down for shooting
        // this.input.on('pointerdown', (pointer) => {
        //     this.player.handleInput(pointer);
        // });

        // Handle bullet clean up when hitting world bounds
        // this.physics.world.on('worldbounds', (body) => {
        //     if (body.gameObject.texture.key === 'bullet') {
        //         this.weaponSystem.bullets.killAndHide(body.gameObject);
        //     }
        // });
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
        // this.player.update();
        if (this.cursors.left.isDown) {
            this.setVelocityX(-this.speed);
        } else if (this.cursors.right.isDown) {
            this.setVelocityX(this.speed);
        } else {
            this.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.setVelocityY(-this.speed);
        } else if (this.cursors.down.isDown) {
            this.setVelocityY(this.speed);
        } else {
            this.setVelocityY(0);
        }
    }
}