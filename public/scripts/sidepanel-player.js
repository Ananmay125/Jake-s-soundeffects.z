const audio = document.getElementById("song");
const playBtn = document.getElementById("ctrlIcon");
const progress = document.getElementById("progress");

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        playBtn.classList.replace("fa-pause", "fa-play");
    }
}

audio.ontimeupdate = () => {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.value = percentage || 0;
};

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};