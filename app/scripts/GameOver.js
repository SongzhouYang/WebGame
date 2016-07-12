WebGame.GameOver = function (game) {

};

WebGame.GameOver.prototype = {
  create: function () {
    this.add.image(this.world.centerX, this.world.centerY, 'menu');
    this.add.image(this.world.centerX, this.world.centerY + 100, 'restart');
  }
};
