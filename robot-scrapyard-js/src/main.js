const config = {
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 720
    },
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: { 
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);