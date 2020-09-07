import MediaPlayer from '../MediaPlayer';

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    // Si el video esta en mute si se puede realizar el autoplay
    if (!player.media.muted) {
      player.media.muted = true;
    }
    player.play();
  }
}


export default AutoPlay;