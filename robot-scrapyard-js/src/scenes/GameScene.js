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
        // Player and Input Setup
        this.player = this.physics.add.sprite(200, 200, 'player');
        player.setCollideWorldBounds(true);    // Prevents player from going outside the world bounds
        this.keys = this.input.keyboard.addKeys('W,S,A,D');

        // Bullet Setup
        this.bullets = this.physics.add.group();
        this.nextFire = 0;

        // Enemy Setup
        this.enemies = this.physics.add.group();
        this.time.addEvent({
            delay: 1000,
            callback: this.spawnEnemy,
            callbackScope: this,
            loop: true
        });

        // Bullet and Enemy Overlaps
        this.physics.add.overlap(
            this.bullets, this.enemies, (bullet, enemy) => {
                bullet.destroy();
                enemy.destroy();
            }
        )
        this.physics.add.overlap(this.player, this.enemies, this.hitPlayer, null, this);

        // Placeholder Text
        this.add.text( 250, 50, 'BACKSPACE to return to Start', {fill: '#ffffff', fontSize: '15px'})
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('StartScene')
		})
        // End of Placeholder Text
    }

    spawnEnemy() {
        const x = Phaser.Math.Between(0, 800);
        const y = Phaser.Math.Between(0, 600);
        this.enemies.create(x, y, 'enemy');
    }
    hitPlayer(player) {
        this.physics.pause();
        player.setTint(0xff0000);

        this.add.text(300, 280, 'GAME OVER', {
            fontSize: '48px',
            fill: '#fff'
        });
    }
    update() {
        // Player Movement
        let speed = 200;
        const body = this.player.body;
        this.player.setVelocity(0);

        if (this.keys.A.isDown) {
            body.setVelocityX(-speed);
        } else if (this.keys.D.isDown) {
            body.setVelocityX(speed);
        }
        if (this.keys.W.isDown) {
            body.setVelocityY(-speed);
        } else if (this.keys.D.isDown) {
            body.setVelocityY(speed);
        }
        // Fixes higher movement speed when going diagonally
        this.player.body.velocity.normalize().scale(speed);

        // Mouse Input
        const pointer = this.input.activePointer;
        this.player.rotation = Phaser.Math.Angle
            .Between(this.player.x, this.player.y,pointer.worldX, pointer.worldY);
        if (pointer.isDown && this.time.now > this.nextFire) {
            this.nextFire = this.time.now + 250;
        }
        const b = this.bullets.create(this.player.x, this.player.y, 'bullet');

        // Enemy Movement
        this.enemies.getChildren().forEach((e) => {
            this.physics.moveToObject(e, this.player, 120);
        });

        // Bullet Cleanup
        this.bullets.getChildren().forEach((b) => {
            if (b.x < 0 || b.x > 800 || b.y < 0 || b.y > 600) {
                b.destroy();
            }
        });
    }
}