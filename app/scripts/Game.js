WebGame.Game = function (game) {
  this.map = null;
  this.layer = null;
  this.a = null;
  this.spacePressed = false;
  this.music = null;
  this.text = null;
  this.enemies = null;
  this.enemy = null;
  this.player = null;
  this.emitter = null;
  this.coinSound = null;
  this.winSound = null;
  this.coins = [];
  this.isOver = false;
};

WebGame.Game.prototype = {
  preload: function () {
    this.coins = [];
    if (this.loseSound) this.loseSound.stop();
    this.isOver = false;
    this.spacePressed = false;
  },

  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.enableBody = true;

    this.createMap();
    this.createScore();
    this.createMusic();
    this.createEnemies();
    this.createEmitter();
    this.createCoins();
    this.createPlayer();

    // this.a = this.add.image(this.world.centerX, this.world.centerY, 'atlasss', 1);
    // this.a.anchor.setTo(0.5);
  },

  createEmitter: function () {
    this.emitter = this.add.emitter(this.world.centerX, this.world.centerY, 5);
    this.emitter.makeParticles(['player']);
    this.emitter.gravity = 100;
    this.emitter.setAlpha(0.3, 1, 5000);
    this.emitter.start(false, 80, 10);
  },

  createCoins: function () {
    this.coins.push(this.add.sprite(28 * 70 + 10, 6 * 70, 'coin'));
  },

  createEnemies: function () {
    this.enemy = this.add.sprite(43.5 * 70, 4 * 70, 'enemy');
    this.enemy.anchor.setTo(0.5, 1);
    this.enemy.scale.setTo(1.5);
    this.enemy.body.immovable = true;
  },

  createMap: function () {
    this.map = this.add.tilemap('gamemap');
    this.map.addTilesetImage('tiles_spritesheet', 'tiles_spritesheet');
    this.map.setCollisionBetween(55, 57);
    this.map.setCollisionBetween(104, 160);
    this.layer = this.map.createLayer(0);
    this.layer.resizeWorld();
    this.physics.arcade.enable(this.layer);

    // this.map.setTileIndexCallback(43, this.lose, this);
    this.map.setTileIndexCallback(70, this.win, this);
    this.map.setTileIndexCallback(82, this.win, this);
  },

  createMusic: function () {
    this.music = this.add.audio('music');
    this.music.play();
    this.coinSound = this.add.audio('getCoin');
    this.winSound = this.add.audio('win');
    this.loseSound = this.add.audio('lose');
  },

  createScore: function () {
    var style = {font: '32px Arial', fill: '#FFFFFF, wordWrap: true'};

    this.text = this.add.text(100, 100, 'Score', style);
    this.physics.arcade.enable(this.text);
    this.text.FixedToCamera = true;
  },

  createPlayer: function () {
    this.player = this.add.sprite(2 * 64, this.world.centerY / 2, 'player');
    this.player.animations.add('walk', [6, 7, 8, 9, 10], 5, true);
    this.player.animations.add('jump', [15], 5, true);
    this.player.animations.add('die', [14], 5, true);
    this.player.animations.add('stand', [12], 5, true);
    this.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 2100;
    this.player.body.velocity.x = 580;
    this.player.body.collideWorldBounds = true;
    var spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(function () {
      this.spacePressed = true;
    }, this);
    spaceKey.onUp.add(function () {
      this.spacePressed = false;
    }, this);
  },

  jump: function () {
    if (this.player.body.velocity.y === 0) this.player.body.velocity.y = -800;
  },

  getCoin: function (player, coin) {
    this.coinSound.play();
    coin.kill();
  },

  update: function () {
    if (this.isOver) {
      this.camera.follow(this.player, undefined, 0.01, 0.01);
    } else {
      this.camera.focusOnXY(this.player.x + 3 * 64, this.player.y);
    }
    this.physics.arcade.collide(this.player, this.layer);
    this.physics.arcade.overlap(this.player, this.enemy, this.lose, null, this);
    this.physics.arcade.overlap(this.player, this.coins, this.getCoin, null, this);

    if (this.spacePressed === true) this.jump();

    if (this.player.body.velocity.x === 0) this.lose();

    if (this.player.body.velocity.x == -0.1) {
      this.player.animations.play('die', 10, false, false);
    } else if (this.player.body.velocity.x == -0.2) {
      this.player.animations.play('stand', 10, false, false);
    } else if (this.player.body.velocity.y === 0) {
      this.player.animations.play('walk', 10, false, false);
    } else {
      this.player.animations.play('jump', 10, false, false);
    }

    if (!this.isOver) {
      this.emitter.minParticleSpeed.set(-this.player.body.velocity.x, -this.player.body.velocity.y);
      this.emitter.maxParticleSpeed.set(-this.player.body.velocity.x, -this.player.body.velocity.y);
      this.emitter.emitX = this.player.x;
      this.emitter.emitY = this.player.y + 50;
    } else {
      this.emitter.on = false;
    }
    // this.physics.arcade.overlap(this.player, this.coins, this.getCoin, null, this);
  },

  lose: function () {
    if (this.isOver === false) {
      this.isOver = true;
      this.music.stop();
      this.loseSound.play(undefined, false, true);
      this.player.body.velocity.x = -0.1;
      this.time.events.add(Phaser.Timer.SECOND * 1.5, this.gameOver, this);
    }
  },

  win: function () {
    if (this.isOver === false) {
      this.music.stop();
      this.winSound.play();
      this.player.body.velocity.x = -0.2;
      this.isOver = true;
      this.time.events.add(Phaser.Timer.SECOND * 1.5, this.stageClear, this);
    }
  },

  gameOver: function () {
    this.state.start('GameOver');
  },

  stageClear: function () {
    this.state.start('GameWin');
  }
};
