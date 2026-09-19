class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    playerCollision(player) {
        player.setTint(0xff0000);
        this.time.delayedCall(700, () => player.clearTint());
    }
    spawnEnemy(texture) {
        let randX = Phaser.Math.Between(1, 800);
        let randY = Phaser.Math.Between(1, 600);
        const enemy = this.enemies.create(randX, randY, texture).setScale(0.1);
    }
    
    preload() {
        this.load.image('player', 'assets/images/player.png');
        this.load.image('enemy', 'assets/images/enemy.png');
    }

    create() {
        // Game Scene and Input Setup
        this.physics.world.setBounds(0, 0, 800, 600);
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

        // Placeholder Text
        this.add.text( 250, 50, 'BACKSPACE to return to Start', {fill: '#ffffff', fontSize: '15px'})
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('StartScene')
		});
        // End of Placeholder Text
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