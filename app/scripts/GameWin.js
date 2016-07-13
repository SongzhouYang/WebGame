'use strict';

WebGame.GameWin = function (game) {
  this.gameWin = null;
  this.isContinue = null;
  this.restart = null;
  this.end = null;
};

WebGame.GameWin.prototype = {
  create: function () {
    this.gameWin = this.add.image(this.world.centerX, this.world.centerY - 350, 'victory');
    this.gameWin.anchor.setTo(0.5);
    this.camera.follow(this.gameWin);
    this.isContinue = this.add.image(this.world.centerX, this.world.centerY - 150, 'continue');
    this.isContinue.anchor.setTo(0.5);
    this.restart = this.add.button(this.world.centerX - 100, this.world.centerY - 30, 'yes', this.restartGame, this);
    this.restart.anchor.setTo(0.5);
    this.end = this.add.button(this.world.centerX + 100, this.world.centerY - 30, 'no', this.endGame, this);
    this.end.anchor.setTo(0.5);
    var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.restartGame, this);
  },

  restartGame: function () {
    this.state.start('Game');
  },

  endGame: function () {
    this.state.start('StartMenu');
  }
};
