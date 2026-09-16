export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y);
        // Adds to the scene
        scene.add.existing(this);
        scene.physics.add.existing(this);
        // Player Physics
        this.setCollideWorldBounds(true);    // Prevents player from going outside the world bounds
        this.body.setSize(20, 20)    // Hitbox dimensions
        // Player input
        this.cursors = scene.input.keyboard.createCursorKeys();
        // // Input setup (keys rebound to WASD instead of arrows)
        // const keys = this.input.keyboard.addKeys({
        //     up: Phaser.Input.Keyboard.KeyCodes.W,
        //     down: Phaser.Input.Keyboard.KeyCodes.S,
        //     left: Phaser.Input.Keyboard.KeyCodes.A,
        //     right: Phaser.Input.Keyboard.KeyCodes.D,
        // })

        // Player info
        this.inventory = inventory;
        this.scene = scene;
        this.speed = 100;
    }
    
     handleInput(pointer) {
        if (pointer.isDown) {
            this.fireWeapon(pointer);
        }
    }

    fireWeapon(pointer) {
        // 1. Check inventory first
        if (this.inventory.hasAmmo()) {
            // 2. Consume the ammo
            this.inventory.consumeAmmo();

            // 3. Emit a scene-wide event with the necessary physics data
            this.scene.events.emit('player_fired', {
                startX: this.x,
                startY: this.y,
                targetX: pointer.worldX,
                targetY: pointer.worldY
            });
        } else {
            console.log("Out of ammo!");
        }
    }
    update() {
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