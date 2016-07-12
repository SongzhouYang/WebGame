var WebGame = {};

WebGame.Boot = function(game) {

};

WebGame.Boot.prototype = {
  preload: function() {
    this.load.image('preloaderBar', 'images/loading.png');
  },

  create: function() {
    this.input.maxPointers = 1;
    this.stage.disableVisibilityChange = false;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.minWidth = 270;
    this.scale.minHeight = 480;
    this.scale.maxHeight = 840;
    this.scale.maxWidth = 1400;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.stage.forcePortrait = true;

    this.input.addPointer();
    this.stage.backgroundColor = "#66ccff";

    this.state.start('Preloader');
  }
};
