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

    // البحث الفوري
    const searchBar = document.getElementById("search-bar");
    if (searchBar) {
        const resultsContainer = document.createElement("div");
        resultsContainer.id = "search-results";
        Object.assign(resultsContainer.style, {
            position: "absolute",
            top: "100%",
            left: "0",
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
            padding: "10px",
            display: "none",
            zIndex: "1000"
        });
        searchBar.parentNode.appendChild(resultsContainer);

        let debounceTimeout;

        searchBar.addEventListener("input", function () {
            clearTimeout(debounceTimeout);
            const searchQuery = this.value.toLowerCase().trim();
            if (searchQuery === "") {
                resultsContainer.style.display = "none";
                return;
            }

            debounceTimeout = setTimeout(() => {
                const products = document.querySelectorAll(".product");
                let resultsFound = false;
                resultsContainer.innerHTML = "";  // Clear previous results

                products.forEach(product => {
                    const productName = product.getAttribute("data-name");
                    if (productName && productName.toLowerCase().includes(searchQuery)) {
                        const resultItem = document.createElement("div");
                        resultItem.textContent = productName;
                        resultItem.style.padding = "5px";
                        resultItem.style.cursor = "pointer";
                        resultItem.style.transition = "background-color 0.3s ease";

                        resultItem.addEventListener("click", () => {
                            window.location.href = product.getAttribute("data-url");
                        });

                        resultItem.addEventListener("mouseenter", () => {
                            resultItem.style.backgroundColor = "#f1f1f1";
                        });

                        resultItem.addEventListener("mouseleave", () => {
                            resultItem.style.backgroundColor = "";
                        });

                        resultsContainer.appendChild(resultItem);
                        resultsFound = true;
                    }
                });

                resultsContainer.style.display = resultsFound ? "block" : "none";
            }, 300);  // Debounce delay of 300ms
        });

        searchBar.addEventListener("blur", () => {
            resultsContainer.style.display = "none";
        });

        searchBar.addEventListener("focus", () => {
            if (resultsContainer.childElementCount > 0) {
                resultsContainer.style.display = "block";
            }
        });
    }

    // تأثير البارالاكس للصور
    document.querySelectorAll(".image-container img").forEach(img => {
        let requestId = null;
        img.addEventListener("mousemove", (e) => {
            if (!requestId) {
                requestId = requestAnimationFrame(() => {
                    const { width, height } = img.getBoundingClientRect();
                    const x = ((e.clientX - img.offsetLeft) / width - 0.5) * 20;
                    const y = ((e.clientY - img.offsetTop) / height - 0.5) * 20;
                    img.style.transform = `scale(1.15) translate(${x}px, ${y}px) rotate(5deg)`;
                });
            }
        });
        img.addEventListener("mouseleave", () => {
            cancelAnimationFrame(requestId);
            requestId = null;
            img.style.transform = "scale(1.0) translate(0, 0) rotate(0)";
        });
    });

    // تحميل الصور الكسول
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
    lazyImages.forEach(img => observer.observe(img));

    // عرض تفاصيل التصميم من الـ URL
    const designName = new URLSearchParams(window.location.search).get("design");
    if (designName) {
        const imageElement = document.getElementById("design-image");
        const titleElement = document.getElementById("design-title");
        const descriptionElement = document.getElementById("design-description");

        if (titleElement) titleElement.textContent = designName;
        if (imageElement) {
            imageElement.src = `images/${designName}.jpg`;
            imageElement.onerror = () => imageElement.src = "images/default.jpg";
        }
        if (descriptionElement) descriptionElement.textContent = `Explore the details of our ${designName} design.`;
    }
});
