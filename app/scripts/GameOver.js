WebGame.GameOver = function (game) {
  this.gameOver = null;
  this.tryAgain = null;
  this.yes = null;
  this.no = null;
};

WebGame.GameOver.prototype = {
  create: function () {
    this.gameOver = this.add.image(this.world.centerX, this.world.centerY - 150, 'gameOver');
    this.gameOver.anchor.setTo(0.5);
    this.camera.follow(this.gameOver);
    this.tryAgain = this.add.image(this.world.centerX, this.world.centerY + 50, 'tryAgain');
    this.tryAgain.anchor.setTo(0.5);
    this.yes = this.add.button(this.world.centerX - 100, this.world.centerY + 150, 'yes', this.startGame, this);
    this.yes.anchor.setTo(0.5);
    this.no = this.add.button(this.world.centerX + 100, this.world.centerY + 150, 'no', this.backToMenu, this);
    this.no.anchor.setTo(0.5);
  },

  startGame: function () {
    this.state.start('Game');
  },

  backToMenu: function () {
    this.state.start('StartMenu');
  }
};
