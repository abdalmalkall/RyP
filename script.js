document.addEventListener("DOMContentLoaded", function () {
    // تحديث سنة حقوق النشر
    const copyrightEl = document.getElementById("copyright-year");
    if (copyrightEl) {
        const currentYear = new Date().getFullYear();
        copyrightEl.textContent = currentYear;
        copyrightEl.style.transition = "color 1s ease-out, transform 1s ease-out";
        copyrightEl.style.transform = "scale(1.1)";
        setTimeout(() => {
            copyrightEl.style.color = "#28a745";
            copyrightEl.style.transform = "scale(1)";
        }, 1000);
    }

    // البحث عن المنتجات
    const searchBar = document.getElementById("search-bar");
    const searchButton = document.getElementById("search-button");
    const products = document.querySelectorAll(".product");

    function filterProducts() {
        const searchQuery = searchBar.value.toLowerCase().trim();
        let found = false;
        
        products.forEach(product => {
            const productName = product.getAttribute("data-name")?.toLowerCase() || "";
            if (searchQuery === "" || productName.includes(searchQuery)) {
                product.style.display = "block";
                found = true;
            } else {
                product.style.display = "none";
            }
        });

        if (!found) {
            console.log("No matching products found.");
        }
    }

    searchBar.addEventListener("input", filterProducts);
    searchButton.addEventListener("click", (e) => {
        e.preventDefault();
        filterProducts();
    });
    searchBar.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            filterProducts();
        }
    });
});
