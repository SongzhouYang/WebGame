WebGame.GameOver = function (game) {
  this.logo = null;
  this.restartButton = null;
};

WebGame.GameOver.prototype = {
  create: function () {
    this.logo = this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.logo.anchor.setTo(0.5);
    this.camera.follow(this.logo);
    this.restartButton = this.add.button(this.world.centerX, this.world.centerY + 300, 'restart', this.startGame, this);
    this.restartButton.anchor.setTo(0.5);
  },

  startGame: function () {
    this.state.start('Game');
  }
};
