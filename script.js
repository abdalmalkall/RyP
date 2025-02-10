document.addEventListener("DOMContentLoaded", function () {
    // تحديث سنة حقوق النشر
    const copyrightEl = document.getElementById("copyright-year");
    if (copyrightEl) {
        copyrightEl.textContent = new Date().getFullYear();
        copyrightEl.style.transition = "color 1s ease-out, transform 1s ease-out";
        copyrightEl.style.transform = "scale(1.1)";
        setTimeout(() => {
            copyrightEl.style.color = "#28a745";
            copyrightEl.style.transform = "scale(1)";
        }, 1000);
    }

    // تحديث السنة في الفوتر ديناميكيًا
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // إضافة وظيفة البحث (تصفية العناصر)
    const searchBar = document.getElementById('search-bar');
    const products = document.querySelectorAll('.product');
    
    searchBar.addEventListener("input", function () {
        const searchQuery = this.value.toLowerCase().trim();

        products.forEach(product => {
            const productName = product.getAttribute("data-name").toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = 'block'; // إظهار المنتج
            } else {
                product.style.display = 'none'; // إخفاء المنتج
            }
        });
    });
});
