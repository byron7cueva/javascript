function MediaPlayer({ el } = {}) {
  this.media = el;
}

MediaPlayer.prototype.togglePlayPuse = function() {
  if (this.media.paused) {
    this.media.play();
  } else {
    this.media.pause();
  }
}

export default MediaPlayer;