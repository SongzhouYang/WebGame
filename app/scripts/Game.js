WebGame.Game = function(game) {
  this.square = null;
  this.map = null;
  this.layer = null;
  this.a = null;
  this.spacePressed = false;
  this.music = null;
  this.text = null;
  this.enemies = null;
  this.enemy = null;
};

WebGame.Game.prototype = {
  preload: function() {

  },

  create: function() {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.enableBody = true;

    this.createSquare();
    this.createScore();
    this.createMusic();
    this.createMap();
    this.createEnemies();

    this.camera.focusOnXY(7*64, this.world.centerY / 2);
    // this.a = this.add.image(this.world.centerX, this.world.centerY, 'atlasss', 1);
    // this.a.anchor.setTo(0.5);
  },

  createEnemies: function() {
    this.enemy = this.add.sprite(43.5 * 70, 4 * 70, 'enemy');
    this.enemy.anchor.setTo(0.5, 1);
    this.enemy.scale.setTo(1.5);
    this.enemy.body.immovable = true;
  },

  createMap: function() {
    this.map = this.add.tilemap('gamemap');
    this.map.addTilesetImage('tiles_spritesheet', 'tiles_spritesheet');
    this.map.setCollisionBetween(50, 90);
    this.map.setCollisionBetween(104, 160);
    this.layer = this.map.createLayer(0);
    this.layer.resizeWorld();
    this.physics.arcade.enable(this.layer);

    this.map.setTileIndexCallback(43, this.resetGame, this);
    this.map.setTileIndexCallback(69, this.resetGame, this);
    this.map.setTileIndexCallback(81, this.resetGame, this);
  },

  createMusic: function() {
    this.music = this.add.audio('music');
    this.music.play();
  },

  createScore: function() {
    var style = { font: "32px Arial", fill: "#FFFFFF, wordWrap: true" };

    this.text = this.add.text(100, 100, "Score", style);
    this.physics.arcade.enable(this.text);
    this.text.FixedToCamera = true;
  },

  createSquare: function() {
    this.square = this.add.sprite(2 * 64, this.world.centerY / 2, 'square');
    this.square.anchor.setTo(0.5);
    this.square.scale.setTo(2);
    this.physics.arcade.enable(this.square);
    this.square.body.gravity.y = 2100;
    this.square.body.velocity.x = 580;
    this.square.angle = 0;
    this.square.body.collideWorldBounds = true;
    var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(function() {
      this.spacePressed = true;
    }, this);
    spaceKey.onUp.add(function() {
      this.spacePressed = false;
    }, this);
  },

  jump: function() {
    if (this.square.body.velocity.y === 0) this.square.body.velocity.y = -800;
  },

  update: function() {
    this.camera.focusOnXY(this.square.x + 4 * 64, this.square.y);
    this.physics.arcade.collide(this.square, this.layer);
    this.physics.arcade.overlap(this.square, this.enemy, this.resetGame, null, this);

    if (this.square.body.velocity.y === 0) {
      this.square.angle = 0;
    } else {
      this.square.angle += 5;
    }
    if (this.spacePressed === true) this.jump();

    if (this.square.body.velocity.x === 0) this.resetGame();
  },

  resetGame: function() {
    this.music.stop();
    this.state.start('Game');
  }
};
