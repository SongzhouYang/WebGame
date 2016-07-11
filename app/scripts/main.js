window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameContainer');

  game.state.add('Boot', WebGame.Boot);
  game.state.add('Preloader', WebGame.Preloader);
  game.state.add('StartMenu', WebGame.StartMenu);
  game.state.add('Game', WebGame.Game);

  game.state.start('Boot');
};
