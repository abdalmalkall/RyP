
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
resultsContainer.style.display = "none";
searchBar.parentNode.appendChild(resultsContainer);

if (searchBar) {
  searchBar.addEventListener("input", function () {
    const searchQuery = this.value.toLowerCase().trim();
    const products = document.querySelectorAll(".product");
    let resultsFound = false;

    resultsContainer.innerHTML = ""; 

    products.forEach(product => {
      const productName = product.getAttribute("data-name");
      if (productName && productName.toLowerCase().includes(searchQuery)) {
        const resultItem = document.createElement("div");
        resultItem.textContent = productName;
        resultItem.style.padding = "5px";
        resultItem.style.cursor = "pointer";
        resultItem.addEventListener("click", () => {
          window.location.href = product.getAttribute("data-url"); 
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

  searchBar.addEventListener("blur", () => {
    resultsContainer.style.display = "none";
  });
}


const imageContainers = document.querySelectorAll(".image-container img");
if (imageContainers.length > 0) {
  imageContainers.forEach(img => {
    let requestId = null;

    const parallaxEffect = (e) => {
      const { width, height } = img.getBoundingClientRect();
      const x = ((e.clientX - img.offsetLeft) / width - 0.5) * 20; 
      const y = ((e.clientY - img.offsetTop) / height - 0.5) * 20; 
      img.style.transform = `scale(1.15) translate(${x}px, ${y}px) rotate(5deg)`; 
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
