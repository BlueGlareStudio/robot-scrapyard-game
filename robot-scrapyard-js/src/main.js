const config = {
    type: Phaser.AUTO,
    width: 1280,    //1280 for 16:9 aspect ratio
    height: 720,    //720 for 16:9 aspect ratio
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        min: {width: 800, height: 600},
        max: {width: 1920, height: 1080}},
    backgroundColor: '#028af8',
    physics: {default: 'arcade', arcade: {debug: false}},
    scene: [StartScene, BaseScene, GameScene, HudScene]
};

const game = new Phaser.Game(config);