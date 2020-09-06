function AutoPlay() {}

AutoPlay.prototype.run = function(player) {
  // Si el video esta en mute si se puede realizar el autoplay
  if(!player.muted) {
    player.muted = true;
  }
  player.play();
}

export default AutoPlay;