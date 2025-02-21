document.addEventListener("DOMContentLoaded", function () {
    // تعامل مع جميع الفيديوهات
    const videos = document.querySelectorAll("video");
    const playButtons = document.querySelectorAll(".play-btn");
    const muteButtons = document.querySelectorAll(".mute-btn");
    const progressBars = document.querySelectorAll(".progress-bar");

    // التكرار عبر جميع الفيديوهات وإضافة التحكمات
    videos.forEach((video, index) => {
        const playButton = playButtons[index];
        const muteButton = muteButtons[index];
        const progressBar = progressBars[index];

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
    });

    // Pause when leaving the page
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            videos.forEach(video => video.pause());
            playButtons.forEach(button => button.innerHTML = '<i class="fas fa-play"></i>');
        }
    });

    // Update copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
});

