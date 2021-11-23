import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);
    const restartTime = Number(localStorage.getItem("videoplayer-current-time"))

function storageTime (evt) {
    const videoCurrentTime = evt.seconds;
  
    console.log(videoCurrentTime);
    localStorage.setItem("videoplayer-current-time", videoCurrentTime)
}

player.on('timeupdate', throttle(storageTime, 1000) );

player.setCurrentTime(restartTime).then(function (seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
            default:
                break;
            }
        })
        
        console.log(restartTime)