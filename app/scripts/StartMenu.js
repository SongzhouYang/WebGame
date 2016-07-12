WebGame.StartMenu = function (game) {
  this.startbackground = null;
  this.startPrompt = null;
  this.startButton = null;
};

WebGame.StartMenu.prototype = {
  create: function () {
    this.startbackground = this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.startbackground.anchor.setTo(0.5);
    this.startButton = this.add.button(this.world.centerX, this.world.centerY + 300, 'StartButton', this.startGame, this);
    this.startButton.anchor.setTo(0.5);
    this.camera.follow(this.startbackground);
  },

  startGame: function (pointer) {
    this.state.start('Game');
  }
};
