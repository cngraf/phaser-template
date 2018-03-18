/* global Phaser */

var config = {
  type: Phaser.AUTO,
  backgroundColor: '#556',
  width: 600,
  height: 400,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload () {
}

function create () {
}

function update () {
}
