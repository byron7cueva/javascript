class MediaPlayer {
  media: HTMLMediaElement | undefined;
  plugins: Array<any>;
  container: HTMLElement;

  constructor({ el = undefined, plugins = [] } = {}) {
    this.media = el;
    this.plugins = plugins;

    this.initPlayer();
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  private initPlayer() {
    this.container = document.createElement('div');
    this.container.style.position = 'relative';
    // Agregando contenedor a lado de media
    this.media.parentNode.insertBefore(this.container, this.media);
    // media dentro del contenedor
    this.container.appendChild(this.media);
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