class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    playerCollision(player) {
        player.setTint(0xff0000);
        this.time.delayedCall(700, () => player.clearTint());
    }
    spawnEnemy(texture) {
        let randX = Phaser.Math.Between(1, 1280);
        let randY = Phaser.Math.Between(1, 720);
        const enemy = this.enemies.create(randX, randY, texture).setScale(0.1);
    }
    fireBullet(pointer) {
        let bullet = this.bullets.get(this.player.x, this.player.y).setScale(0.1);
        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.setPosition(this.player.x, this.player.y);
        }
        let angle = Phaser.Math.Angle.Between(this.player.x, this.player.y, pointer.x, pointer.y);
        this.physics.velocityFromRotation(angle, 800, bullet.body.velocity);
        bullet.roation = angle;
    }
    
    preload() {
        this.load.image('player', 'assets/images/player.png');
        this.load.image('enemy', 'assets/images/enemy.png');
        this.load.image('bullet', 'assets/images/bullet.png');
    }

    create() {
        // Game Scene and Input Setup
        const centerX = this.scale.width / 2;
		const centerY = this.scale.height / 2;
        this.physics.world.setBounds(0, 0, 1280, 720);
        this.moveKeys = this.input.keyboard.addKeys({
            up: 'W',
            down: 'S',
            left: 'A',
            right: 'D'
        });

        // Player Setup
        this.player = this.physics.add.sprite(200, 200, 'player').setScale(0.1);
        this.player.setCollideWorldBounds(true);

        // Enemy Setup
        this.enemies = this.physics.add.group();
        this.enemyChild = this.enemies.getChildren();
        this.input.keyboard.on('keydown-SPACE', () => {
            this.spawnEnemy('enemy');
        });

        // Collision Setup
        this.physics.add.overlap(this.player, this.enemies, this.playerCollision, null, this);

        // Bullet Setup
        this.bullets = this.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 30
        });
        this.input.on('pointerup', (pointer) => {
            this.fireBullet(pointer);
        });

        // Return to Menu Text and Code
        this.add.text( centerX, (centerY - 300), 'BACKSPACE to return to Start', {fill: '#ffffff', fontSize: '15px'}).setOrigin(0.5);
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('StartScene')
		});
    }

    update() {
        // Player Movement
        let playerSpeed = 125;    // Default: 125
        if (this.moveKeys.left.isDown) {
            this.player.setFlipX(true);
            this.player.setVelocityX(-playerSpeed);
        } else if (this.moveKeys.right.isDown) {
            this.player.setFlipX(false);
            this.player.setVelocityX(playerSpeed);
        } else {
            this.player.setVelocityX(0);
        }
        if (this.moveKeys.up.isDown) {
            this.player.setVelocityY(-playerSpeed);
        } else if (this.moveKeys.down.isDown) {
            this.player.setVelocityY(playerSpeed);
        } else {
            this.player.setVelocityY(0);
        }
    }
}