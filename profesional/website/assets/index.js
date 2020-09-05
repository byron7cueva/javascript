const video = document.querySelector('video');
const button = document.querySelector('button');

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

const player = new MediaPlayer({ el: video});

button.onclick = () => player.togglePlayPuse();