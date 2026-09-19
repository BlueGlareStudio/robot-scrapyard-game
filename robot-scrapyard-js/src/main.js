const config = {
    type: Phaser.AUTO,
    width: 800,    //480 for 16:9 aspect ratio
    height: 600,    //270 for 16:9 aspect ratio
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