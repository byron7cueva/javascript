import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video: HTMLMediaElement = document.querySelector('video');
const playButton: HTMLElement = document.getElementById('playButton');
const muteButton: HTMLElement = document.getElementById('muteButton');

const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ]
});

playButton.onclick = () => player.togglePlayPuse();
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.error(error.message);
  });
}