WebGame.StartMenu = function(game) {
  this.startbackground = null;
  this.startPrompt = null;
};

WebGame.StartMenu.prototype = {
  create: function() {
    this.startbackground = this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.startbackground.anchor.setTo(0.5);
    this.startbackground.inputEnabled = true;
    this.startbackground.events.onInputDown.addOnce(this.startGame, this);

    // this.startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+180, 'Arial', 'Touch to Start', 20);

  },

  startGame: function(pointer) {
    this.state.start('Game');
  }
};
