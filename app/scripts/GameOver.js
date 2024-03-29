'use strict';

WebGame.GameOver = function (game) {
  this.gameOver = null;
  this.tryAgain = null;
  this.yes = null;
  this.no = null;
  this.music = null;
};

WebGame.GameOver.prototype = {
  create: function () {
    this.gameOver = this.add.image(this.world.centerX, this.world.centerY - 350, 'gameOver');
    this.gameOver.anchor.setTo(0.5);
    this.camera.follow(this.gameOver);
    this.tryAgain = this.add.image(this.world.centerX, this.world.centerY - 150, 'tryAgain');
    this.tryAgain.anchor.setTo(0.5);
    this.yes = this.add.button(this.world.centerX - 100, this.world.centerY - 50, 'yes', this.startGame, this);
    this.yes.anchor.setTo(0.5);
    this.no = this.add.button(this.world.centerX + 100, this.world.centerY - 50, 'no', this.backToMenu, this);
    this.no.anchor.setTo(0.5);
    this.music = this.add.audio('lose');
    this.music.play();
    var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.startGame, this);
  },

  startGame: function () {
    this.music.stop();
    this.state.start('Game');
  },

  backToMenu: function () {
    this.music.stop();
    this.state.start('StartMenu');
  }
};
