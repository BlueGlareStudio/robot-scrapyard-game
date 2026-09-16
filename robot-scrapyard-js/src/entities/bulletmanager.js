export default class BulletManager {
    constructor(scene) {
        this.scene = scene;

        // Create a dynamic physics group for bullets
        this.bullets = scene.physics.add.group({
            defaultKey: 'bullet',
            maxSize: 100 // Memory management: pools bullets
        });

        // Listen for the player firing
        scene.events.on('player_fired', this.spawnBullet, this);
    }

    spawnBullet(data) {
        // Get an inactive bullet from the pool
        const bullet = this.bullets.get(data.startX, data.startY);

        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);

            // Calculate physics angle and velocity toward the target pointer
            const angle = Phaser.Math.Angle.Between(data.startX, data.startY, data.targetX, data.targetY);
            const speed = 600;

            this.scene.physics.velocityFromRotation(angle, speed, bullet.body.velocity);

            // Optional: Auto-destroy bullet when it leaves world bounds
            bullet.body.setCollideWorldBounds(true);
            bullet.body.onWorldBounds = true;
        }
    }
}