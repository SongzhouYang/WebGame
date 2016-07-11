WebGame.Game = function(game) {
  this.square = null;
};

WebGame.Game.prototype = {
  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);

    this.square = this.add.sprite(100, this.world.centerY / 2, 'square');
    this.square.anchor.setTo(0.5);
    this.square.scale.setTo(0.2);
    this.physics.arcade.enable(this.square);
    this.square.body.gravity.y = 1000;
    var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
  },

  jump: function() {
    this.square.body.velocity.y = -800;
  },

  update: function() {

  }
};
