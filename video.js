document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");

    // إيقاف الفيديو عند الخروج من الصفحة
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            video.pause();
        }
    });

    // التحكم في تشغيل وإيقاف الفيديو بالنقر عليه
    video.addEventListener("click", function () {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // إظهار رسالة عند انتهاء الفيديو
    video.addEventListener("ended", function () {
        alert("تم الانتهاء من تشغيل الفيديو!");
    });
});
