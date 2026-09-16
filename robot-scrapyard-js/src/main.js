const config = {
    type: Phaser.AUTO,
    scale: {
        width: 800,
        height: 600
    },
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: { 
            debug: false
        }
    },
    scene: [StartScene, GameScene]
};

const game = new Phaser.Game(config);