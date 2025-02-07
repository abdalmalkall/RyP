document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const playButton = document.getElementById("play-btn");
    const muteButton = document.getElementById("mute-btn");
    const progressBar = document.getElementById("progress-bar");

    // Play/Pause Video
    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            video.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Mute/Unmute Video
    muteButton.addEventListener("click", function () {
        video.muted = !video.muted;
        muteButton.innerHTML = video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });

    // Update Progress Bar
    video.addEventListener("timeupdate", function () {
        const progress = (video.currentTime / video.duration) * 100;
        progressBar.value = progress;
    });

    // Seek Video
    progressBar.addEventListener("input", function () {
        const seekTime = (progressBar.value / 100) * video.duration;
        video.currentTime = seekTime;
    });

    // Pause when leaving the page
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            video.pause();
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
});
