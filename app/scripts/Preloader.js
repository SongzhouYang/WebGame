'use strict';

WebGame.Preloader = function () {
  this.preloaderBar = null;
  this.ready = false;
  this.levelone = null;
};

WebGame.Preloader.prototype = {
  preload: function () {
    this.preloaderBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
    this.preloaderBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloaderBar);

    // load everything for the game here
    this.load.image('menu', 'images/menu.png');
    this.load.image('StartButton', 'images/StartButton.png');
    this.load.spritesheet('player', 'images/p1_spritesheet.png', 73, 96, -1, 0, 0);
    this.load.spritesheet('fly', 'images/fly.png', 72, 36, -1, 0, 0);
    this.load.tilemap('gamemap', 'images/gamemap.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles_spritesheet', 'images/tileset/tiles_spritesheet.png');
    this.load.image('bg', 'images/bg.png');
    this.load.audio('getCoin', 'sound/getCoin.ogg');
    this.load.audio('win', 'sound/win.ogg');
    this.load.audio('lose', 'sound/lose.mp3');
    this.load.audio('music', 'sound/levelone.mp3');
    this.load.audio('key', 'sound/key.ogg');
    this.load.audio('menu', 'sound/menu.mp3');
    this.load.audio('die', 'sound/die.ogg');
    this.load.image('slime', 'images/slime.png');
    this.load.image('snail', 'images/snail.png');
    this.load.image('gameOver', 'images/gameover.png');
    this.load.image('tryAgain', 'images/tryagain.png');
    this.load.image('yes', 'images/yes.png');
    this.load.image('no', 'images/no.png');
    this.load.image('coin', 'images/coin.png');
    this.load.image('victory', 'images/victory.png');
    this.load.image('continue', 'images/continue.png');
  },

  create: function () {
    this.preloaderBar.cropEnabled = false;
    var style = {font: '32px Arial', fill: '#FFFFFF, wordWrap: true'};
    this.text = this.add.text(this.world.centerX, this.world.centerY - 100, 'Loading', style);
  },

  update: function () {
    this.ready = true;
    this.state.start('StartMenu');
  }
};
