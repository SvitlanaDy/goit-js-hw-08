import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
    const player = new Player(iframe);
    // const STORAGE_KEY = "videoplayer-current-time";
    // const playTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
    // const startVideo = localStorage.getItem(STORAGE_KEY);
    
    //     console.log('played the video!');
        // const onPlay = function onPlay(evt) { 
           
    //  localStorage.setItem('currentTime', JSON.stringify(playTime));
        // };
        
        // player.on('play', onPlay);
        player.on('timeupdate', throttle (onPlay,1000));

    // player.setCurrentTime(JSON.parsel(localStorage.getItem(STORAGE_KEY)));
function onPlay(evt){
    localStorage.setItem('currentTime', evt.seconds);
}

    player
    .setCurrentTime(localStorage.getItem('currentTime'))
    .then(function(seconds) {
        // seconds = the actual time that the player seeked to
    })
    .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });