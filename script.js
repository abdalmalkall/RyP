// تحديث السنة الحالية في عنصر الـ copyright مع تأثير أنيق
const copyrightEl = document.getElementById("copyright-year");
if (copyrightEl) {
  copyrightEl.textContent = new Date().getFullYear();
  copyrightEl.style.transition = "color 1s ease-out, transform 1s ease-out";
  copyrightEl.style.transform = "scale(1.1)";
  setTimeout(() => {
    copyrightEl.style.color = "#28a745"; // إضافة لون أخضر فاخر
    copyrightEl.style.transform = "scale(1)";
  }, 1000);
}

// تحسين البحث في المنتجات مع إضافة تأثيرات رسومية فخمة
const searchBar = document.getElementById("search-bar");
const resultsContainer = document.createElement("div");
resultsContainer.id = "search-results";
resultsContainer.style.position = "absolute";
resultsContainer.style.top = "100%";
resultsContainer.style.left = "0";
resultsContainer.style.width = "100%";
resultsContainer.style.backgroundColor = "#fff";
resultsContainer.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
resultsContainer.style.padding = "10px";
resultsContainer.style.display = "none"; // إخفاء نتائج البحث
searchBar.parentNode.appendChild(resultsContainer);

if (searchBar) {
  searchBar.addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase().trim();
    const products = document.querySelectorAll(".product");
    let resultsFound = false;

    resultsContainer.innerHTML = ""; // إعادة تعيين المحتوى في كل مرة

    products.forEach(product => {
      const productName = product.getAttribute("data-name");
      if (productName && productName.toLowerCase().includes(searchQuery)) {
        const resultItem = document.createElement("div");
        resultItem.textContent = productName;
        resultItem.style.padding = "5px";
        resultItem.style.cursor = "pointer";
        resultItem.addEventListener("click", () => {
          window.location.href = product.getAttribute("data-url"); // توجيه المستخدم إلى المنتج
        });
        resultsContainer.appendChild(resultItem);
        resultsFound = true;
      }
    });

    if (resultsFound) {
      resultsContainer.style.display = "block";
    } else {
      resultsContainer.style.display = "none";
    }
  });

  // إخفاء نتائج البحث عند فقدان التركيز
  searchBar.addEventListener("blur", () => {
    resultsContainer.style.display = "none";
  });
}

// تحسين حركة Parallax للصور مع تأثيرات CSS إضافية
const imageContainers = document.querySelectorAll(".image-container img");
if (imageContainers.length > 0) {
  imageContainers.forEach(img => {
    let requestId = null;

    const parallaxEffect = (e) => {
      const { width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - img.offsetLeft) / width - 0.5) * 20; // زيادة تأثير الحركة
      const y = ((e.clientY - img.offsetTop) / height - 0.5) * 20; // زيادة تأثير الحركة
      img.style.transform = `scale(1.15) translate(${x}px, ${y}px) rotate(5deg)`; // إضافة التدوير للمزيد من التأثير
    };

    img.addEventListener("mousemove", (e) => {
      if (!requestId) {
        requestId = requestAnimationFrame(() => parallaxEffect(e));
      }
    });

    img.addEventListener("mouseleave", () => {
      cancelAnimationFrame(requestId);
      requestId = null;
      img.style.transform = "scale(1.0) translate(0, 0) rotate(0)";
    });
  });
}

// تحسين أداء الصور باستخدام Lazy Load (تحميل الصور عند دخولها في العرض)
const lazyImages = document.querySelectorAll('img[data-src]');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.onload = () => img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
}, { threshold: 0.1 });

lazyImages.forEach(img => {
  observer.observe(img);
});
