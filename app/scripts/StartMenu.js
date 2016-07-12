WebGame.StartMenu = function (game) {
  this.startbackground = null;
  this.startPrompt = null;
};

WebGame.StartMenu.prototype = {
  create: function () {
    this.startbackground = this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.startbackground.anchor.setTo(0.5);
    this.startbackground.inputEnabled = true;
    this.add.button(this.world.centerX - 50, this.world.centerY + 280, 'StartButton', this.startGame, this);
  },

  startGame: function (pointer) {
    this.state.start('Game');
  }
};
