class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    playerCollision(player) {
        player.setTint(0xff0000);
        this.time.delayedCall(700, () => player.clearTint());
    }
    enemyCollision(bullet, enemy) {
        bullet.destroy();
        enemy.destroy();
        this.score += 50;
        this.scoreText.setText('Score: ' + this.score);
        if (this.score === 100) {
            this.winGame();
        }
    }
    spawnEnemy(texture) {
        let randX = Phaser.Math.Between(1, 1200);
        let randY = Phaser.Math.Between(1, 700);
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
        this.physics.velocityFromRotation(angle, 500, bullet.body.velocity);    // Integer represents bullet speed
        bullet.roation = angle;
    }
    winGame() {
        // this.scene.pause('GameScene');
        const winText = this.add.text(centerX, centerY, 'You Win!', {fill: '#ffffff', fontSize: '35px'}).setOrigin(0.5);
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
        this.score = 0;
        this.scoreText = this.add.text(centerX, (centerY + 300), 'Press R to Restart', {fill: '#ffffff', fontSize: '25px'}).setOrigin(0.5);
        this.input.keyboard.on('keydown-R', () => {
            this.scene.start('GameScene');
        });

        // Player Setup
        this.player = this.physics.add.sprite(centerX, centerY, 'player').setScale(0.1);
        this.player.setCollideWorldBounds(true);

        // Enemy Setup
        this.enemies = this.physics.add.group({
            defaultKey: 'enemy'
        });
        for (let i = 0; i < 10; i++) {    // Spawns 10 enemies then stops
            this.spawnEnemy();
        };

        // Bullet and Shooting Setup
        this.bullets = this.physics.add.group({
            defaultKey: 'bullet'
        });
        this.input.on('pointerdown', (pointer) => {
            this.fireBullet(pointer);
        });

        // Collision Setup
        this.physics.add.overlap(this.player, this.enemies, this.playerCollision, null, this);
        this.physics.add.overlap(this.bullets, this.enemies, this.enemyCollision, null, this);

        // Return to Menu Text and Code
        this.scoreText = this.add.text(centerX, (centerY - 275), 'Score: 0', {fill: '#ffffff', fontSize: '25px'}).setOrigin(0.5);
        this.add.text( centerX, (centerY - 300), 'BACKSPACE to return to Base', {fill: '#ffffff', fontSize: '15px'}).setOrigin(0.5);
        this.input.keyboard.on('keydown-BACKSPACE', () => {
			this.scene.stop('GameScene')
			this.scene.start('BaseScene')
		});
    }

    update() {
        // Player Movement
        let playerSpeed = 100;    // Default: 100
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