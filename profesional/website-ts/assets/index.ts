import MediaPlayer from 'mediaplayer';
import AutoPlay from 'mediaplayer/lib/plugins/AutoPlay';
import AutoPause from 'mediaplayer/lib/plugins/AutoPause';
import Ads from 'mediaplayer/lib/plugins/Ads'

const video: HTMLMediaElement = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
  ]
});

playButton.onclick = () => player.togglePlayPuse();
muteButton.onclick = () => player.toggleMute();

/* if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message);
  });
} */