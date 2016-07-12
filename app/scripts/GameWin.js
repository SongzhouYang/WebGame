WebGame.GameWin = function (game) {
  this.gameWin = null;
  this.tryAgain = null;
  this.yes = null;
  this.no = null;
};

WebGame.GameWin.prototype = {
  create: function () {
    this.gameWin = this.add.image(this.world.centerX, this.world.centerY - 150, 'victory');
    this.gameWin.anchor.setTo(0.5);
    this.camera.follow(this.gameWin);
    this.tryAgain = this.add.image(this.world.centerX, this.world.centerY + 50, 'continue');
    this.tryAgain.anchor.setTo(0.5);
    this.yes = this.add.button(this.world.centerX - 100, this.world.centerY + 170, 'yes', this.startGame, this);
    this.yes.anchor.setTo(0.5);
    this.no = this.add.button(this.world.centerX + 100, this.world.centerY + 170, 'no', this.backToMenu, this);
    this.no.anchor.setTo(0.5);
  },

  startGame: function () {
    this.state.start('Game');
  },

  backToMenu: function () {
    this.state.start('StartMenu');
  }
};
