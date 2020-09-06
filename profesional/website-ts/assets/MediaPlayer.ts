class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor({ el, plugins = [] } = {}) {
    this.media = el;
    this.plugins = plugins;

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlayPuse() {
    if (this.media.paused) {
      this.play();
    }
    else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleMute() {
    if (this.media.muted) {
      this.unmute();
    }
    else {
      this.mute();
    }
  }
}








export default MediaPlayer;