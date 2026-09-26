const config = {
    type: Phaser.AUTO,
    width: 1280,    //1280 for 16:9 aspect ratio
    height: 720,    //720 for 16:9 aspect ratio
    backgroundColor: '#028af8',
    physics: {
        default: 'arcade',
        arcade: { 
            debug: false
        }
    },
    scene: [StartScene, BaseScene, GameScene]
};

const game = new Phaser.Game(config);