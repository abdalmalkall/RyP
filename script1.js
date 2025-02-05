document.addEventListener("DOMContentLoaded", function () {
    // تحديث سنة حقوق الطبع والنشر تلقائيًا
    document.getElementById("copyright-year").textContent = new Date().getFullYear();

    // التحقق من عنوان URL لاستخراج بيانات التصميم
    const params = new URLSearchParams(window.location.search);
    const designName = params.get("design");

    if (designName) {
        document.getElementById("design-title").textContent = designName;
        document.getElementById("design-image").src = `images/${designName}.jpg`;
        document.getElementById("design-description").textContent = `Explore the details of our ${designName} design.`;
    }
});
