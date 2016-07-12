'use strict';

WebGame.StartMenu = function (game) {
  this.startbackground = null;
  this.startPrompt = null;
  this.startButton = null;
  this.music = null;
};

WebGame.StartMenu.prototype = {
  create: function () {
    this.startbackground = this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.startbackground.anchor.setTo(0.5);
    this.startButton = this.add.button(this.world.centerX, this.world.centerY + 200, 'StartButton', this.startGame, this);
    this.startButton.anchor.setTo(0.5);
    this.camera.follow(this.startbackground);
    this.music = this.add.audio('menu', undefined, true);
    this.music.play();
  },

  startGame: function (pointer) {
    this.music.stop();
    this.state.start('Game');
  }
};
