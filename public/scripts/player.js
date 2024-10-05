const audio2 = document.getElementById("song-2");
const audio3 = document.getElementById("song-3");
const audio4 = document.getElementById("song-4");
const playBtn2 = document.getElementById("ctrlIcon-2");
const playBtn3 = document.getElementById("ctrlIcon-3");
const playBtn4 = document.getElementById("ctrlIcon-4");

function playPause2() {
    if (audio2.paused) {
        audio2.play();
        playBtn2.classList.replace("fa-play", "fa-pause");
    } else {
        audio2.pause();
        playBtn2.classList.replace("fa-pause", "fa-play");
    }
}

function playPause3(){
    if (audio3.paused) {
        audio3.play();
        playBtn3.classList.replace("fa-play", "fa-pause");
    } else {
        audio3.pause();
        playBtn3.classList.replace("fa-pause", "fa-play");
    }
}

function playPause4(){
    if (audio4.paused) {
        audio4.play();
        playBtn4.classList.replace("fa-play", "fa-pause");
    } else {
        audio4.pause();
        playBtn4.classList.replace("fa-pause", "fa-play");
    }
}