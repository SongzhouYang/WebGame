'use strict';

WebGame.Game = function (game) {
  this.map = null;
  this.layer = null;
  this.spacePressed = false;
  this.music = null;
  this.enemies = [];
  this.player = null;
  this.emitter = null;
  this.coinSound = null;
  this.winSound = null;
  this.coins = [];
  this.bg = null;
  this.isOver = false;
  this.coinSets = [[120, 9], [114, 9], [27, 14], [33, 13], [57, 13], [58, 13], [59, 13], [60, 13], [46, 11], [47, 11], [48, 11], [139, 11], [156, 9]];
  this.enemySets = [[33, 11, 0], [64, 13, 2], [140, 13, 1], [167, 12, 0], [173, 15, 1], [18, 16, 1], [156, 11, 0], [138, 8, 0], [102, 6, 0]];
};

WebGame.Game.prototype = {
  preload: function () {
    this.coins = [];
    if (this.loseSound) this.loseSound.stop();
    this.isOver = false;
    this.spacePressed = false;
    this.enemies = [];
  },

  create: function () {
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.world.enableBody = true;

    this.createBackground();
    this.createMap();
    this.createEnemies();
    this.createCoins();
    this.createPlayer();
    this.createEmitter();
    this.createMusic();
  },

  createBackground: function () {
    this.bg = this.add.tileSprite(-500, 0, 5067, 20 * 70, 'bg');
  },

  createEmitter: function () {
    this.emitter = this.add.emitter(this.world.centerX, this.world.centerY, 5);
    this.emitter.makeParticles(['player']);
    this.emitter.gravity = 100;
    this.emitter.setAlpha(0.3, 1, 5000);
    this.emitter.start(false, 80, 10);
  },

  createCoins: function () {
    for (var i = 0, l = this.coinSets.length; i < l; i++) {
      this.addCoin(this.coinSets[i][0], this.coinSets[i][1]);
    }
  },

  addCoin: function (x, y) {
     this.coins.push(this.add.sprite(x * 70 + 10, y * 70, 'coin'));
  },

  createEnemies: function () {
    for (var i = 0, l = this.enemySets.length; i < l; i++) {
      this.addEnemy(this.enemySets[i][0], this.enemySets[i][1], this.enemySets[i][2]);
    }
  },

  addEnemy: function (x, y, type) {
    var e;
    if (type === 0) {
      e = this.add.sprite(x * 70 + 10, y * 70, 'fly');
      e.animations.add('flying', [0, 1], 5, true);
      e.body.immovable = true;
      this.enemies.push(e);
    } else {
      e = this.add.sprite(x * 70 + 10, y * 70 + 26, type == 1 ? 'slime' : 'snail');
      e.body.immovable = true;
      e.scale.setTo(1.5);
      this.enemies.push(e);
    }
  },

  createMap: function () {
    this.map = this.add.tilemap('gamemap');
    this.map.addTilesetImage('tiles_spritesheet', 'tiles_spritesheet');
    this.map.setCollisionByIndex(104);
    this.map.setCollisionByIndex(153);
    this.map.setCollisionByIndex(69);
    this.map.setCollisionByIndex(57);
    this.map.setCollisionByIndex(45);
    this.map.setCollisionByIndex(81);
    this.map.setCollisionByIndex(66);
    this.map.setCollisionByIndex(54);
    this.map.setCollisionByIndex(42);
    this.map.setCollisionByIndex(101);
    this.map.setCollisionByIndex(153);
    this.map.setCollisionByIndex(36);
    this.map.setCollisionByIndex(56);
    this.map.setCollisionByIndex(130);
    this.map.setCollisionByIndex(60);
    this.map.setCollisionByIndex(129);
    this.map.setCollisionByIndex(133);

    this.layer = this.map.createLayer(0);
    this.layer.resizeWorld();
    this.physics.arcade.enable(this.layer);

    this.map.setTileIndexCallback(70, this.win, this);
    this.map.setTileIndexCallback(44, this.lose, this);
    this.map.setTileIndexCallback(8, this.lose, this);
    this.map.setTileIndexCallback(82, this.win, this);
  },

  createMusic: function () {
    this.music = this.add.audio('music');
    this.music.play();
    this.coinSound = this.add.audio('getCoin');
    this.winSound = this.add.audio('win');
    this.loseSound = this.add.audio('die');
  },

  createPlayer: function () {
    this.player = this.add.sprite(2 * 64, this.world.centerY * 3 / 4, 'player');
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
      this.camera.focusOnXY(this.player.x + 5 * 70, this.player.y);
      this.bg.position.x += 8;
      this.bg.tilePosition.x -= 5;
    }
    this.physics.arcade.collide(this.player, this.layer);
    this.physics.arcade.overlap(this.player, this.enemies, this.lose, null, this);
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

    for (var i = 0, l = this.enemySets.length; i < l; i++) {
      if (this.enemySets[i][2] === 0) {
        this.enemies[i].animations.play('flying', 5, false, false);
      }
    }

    if (!this.isOver) {
      this.emitter.minParticleSpeed.set(-this.player.body.velocity.x, -this.player.body.velocity.y);
      this.emitter.maxParticleSpeed.set(-this.player.body.velocity.x, -this.player.body.velocity.y);
      this.emitter.emitX = this.player.x;
      this.emitter.emitY = this.player.y + 50;
    } else {
      this.emitter.on = false;
    }
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
