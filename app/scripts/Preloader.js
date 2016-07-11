WebGame.Preloader = function() {
  this.preloaderBar = null;
  this.ready = false;
};

WebGame.Preloader.prototype = {
  preload: function() {
    this.preloaderBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.preloaderBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloaderBar);

    // load everything for the game here
    this.load.image('square', 'images/square.png');
    this.load.image('menu', 'images/menu.png');
  },

  create: function() {
    this.preloaderBar.cropEnabled = false;
  },

  update: function() {
    this.ready = true;
    this.state.start('StartMenu');
  }
};
