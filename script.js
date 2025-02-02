// تحديث السنة الحالية في عنصر الـ copyright
const copyrightEl = document.getElementById("copyright-year");
if (copyrightEl) {
  copyrightEl.textContent = new Date().getFullYear();
}

// البحث في المنتجات عند إدخال نص في شريط البحث
const searchBar = document.getElementById("search-bar");
if (searchBar) {
  searchBar.addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase().trim();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
      const productName = product.getAttribute("data-name");
      product.style.display = productName && productName.toLowerCase().includes(searchQuery) ? "block" : "none";
    });
  });
}

// إضافة تأثير حركة Parallax للصور داخل .image-container
const imageContainers = document.querySelectorAll(".image-container img");
if (imageContainers.length > 0) {
  imageContainers.forEach(img => {
    img.addEventListener("mousemove", (e) => {
      const { width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - img.offsetLeft) / width - 0.5) * 15;
      const y = ((e.clientY - img.offsetTop) / height - 0.5) * 15;
      img.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1.0) translate(0, 0)";
    });
  });
}
