// تحديث السنة الحالية في عنصر الـ copyright
const copyrightEl = document.getElementById("copyright-year");
if (copyrightEl) {
  copyrightEl.textContent = new Date().getFullYear();
}

// البحث في المنتجات عند إدخال نص في شريط البحث
const searchBar = document.getElementById("search-bar");
if (searchBar) {
  searchBar.addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      // الحصول على قيمة data-name والتأكد من وجودها
      const productName = product.getAttribute("data-name");
      if (productName && productName.toLowerCase().includes(searchQuery)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

// إضافة تأثير حركة Parallax للصور داخل .image-container
const imageElements = document.querySelectorAll(".image-container img");
if (imageElements.length > 0) {
  imageElements.forEach((img) => {
    img.addEventListener("mousemove", (e) => {
      // حساب نسبة الحركة بناءً على موقع الماوس داخل الصورة
      const x = (e.offsetX / img.clientWidth - 0.5) * 10;
      const y = (e.offsetY / img.clientHeight - 0.5) * 10;
      img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    });

    img.addEventListener("mouseleave", () => {
      // إعادة تعيين الحركة عند مغادرة الماوس للصورة
      img.style.transform = "scale(1.1) translate(0px, 0px)";
    });
  });
}
