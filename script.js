document.getElementById("copyright-year").textContent = new Date().getFullYear();

document.getElementById("search-bar").addEventListener("input", function() {
    let searchQuery = this.value.toLowerCase();
    let products = document.querySelectorAll(".product");
    
    products.forEach(product => {
        let productName = product.getAttribute("data-name").toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});
