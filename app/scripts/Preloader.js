WebGame.Preloader = function () {
  this.preloaderBar = null;
  this.ready = false;
  this.levelone = null;
};

WebGame.Preloader.prototype = {
  preload: function () {
    this.preloaderBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.preloaderBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloaderBar);

    // load everything for the game here
    this.load.image('square', 'images/bluesquare.png');
    this.load.image('menu', 'images/menu.png');
    this.load.image('StartButton', 'images/StartButton.png');
    this.load.tilemap('gamemap', 'images/gamemap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles_spritesheet', 'images/tileset/tiles_spritesheet.png');
    this.load.audio('music', 'images/BaseAfterBase.mp3');
    this.load.image('enemy', 'images/slimeWalk1.png');
  },

  create: function () {
    this.preloaderBar.cropEnabled = false;
  },

  update: function () {
    this.ready = true;
    this.state.start('StartMenu');
  }
};
