function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  // Si el video esta en mute si se puede realizar el autoplay
  player.mute();
  player.play();
}

export default AutoPlay;