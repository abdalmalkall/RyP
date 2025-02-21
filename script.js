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
    const noResultsMessage = document.createElement("p");
    noResultsMessage.textContent = "There are no matching products.";
    noResultsMessage.style.display = "none"; // إخفاء الرسالة في البداية
    document.querySelector(".product-section").appendChild(noResultsMessage);

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

        // عرض أو إخفاء رسالة عدم وجود نتائج
        noResultsMessage.style.display = found ? "none" : "block";
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
















// إنشاء العنصر الرئيسي لشاشة الترحيب
const splashScreen = document.createElement("div");
splashScreen.style.position = "fixed";
splashScreen.style.top = "0";
splashScreen.style.left = "0";
splashScreen.style.width = "100%";
splashScreen.style.height = "100%";
splashScreen.style.background = "linear-gradient(135deg, #1a1a1a, #444)";
splashScreen.style.display = "flex";
splashScreen.style.flexDirection = "column";
splashScreen.style.alignItems = "center";
splashScreen.style.justifyContent = "center";
splashScreen.style.zIndex = "9999";
splashScreen.style.transition = "opacity 1s ease-in-out";
splashScreen.style.padding = "20px";
document.body.appendChild(splashScreen);

// اللوجو
const logo = document.createElement("img");
logo.src = "favicon.ico";
logo.style.width = "15vw";
logo.style.maxWidth = "150px";
logo.style.height = "auto";
logo.style.marginBottom = "15px";
logo.style.opacity = "0";
logo.style.animation = "fadeIn 1.2s ease-in-out forwards";

// حاوية النصوص
const textContainer = document.createElement("div");
textContainer.style.textAlign = "center";
textContainer.style.opacity = "0";
textContainer.style.animation = "fadeIn 1.5s ease-in-out 0.5s forwards";
textContainer.style.maxWidth = "90%";

// كلمة "from"
const fromText = document.createElement("div");
fromText.innerText = "from";
fromText.style.color = "#ffd900";
fromText.style.fontSize = "clamp(14px, 2vw, 20px)";
fromText.style.fontFamily = "'Cinzel Decorative', serif";
fromText.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.7)";

// نص "Render Your Plan"
const nameText = document.createElement("div");
nameText.innerText = "Render Your Plan";
nameText.style.color = "#ffd900";
nameText.style.fontSize = "clamp(18px, 3vw, 26px)";
nameText.style.fontWeight = "bold";
nameText.style.fontFamily = "'Cinzel Decorative', serif";
nameText.style.textShadow = "2px 2px 6px rgba(0, 0, 0, 0.8)";
nameText.style.letterSpacing = "1px";

textContainer.appendChild(fromText);
textContainer.appendChild(nameText);
splashScreen.appendChild(logo);
splashScreen.appendChild(textContainer);

document.body.appendChild(splashScreen);

// إخفاء شاشة الترحيب تدريجيًا بعد وقت محدد
setTimeout(() => {
    splashScreen.style.opacity = "0";
    setTimeout(() => {
        splashScreen.remove();
    }, 1000);
}, 2500);

// إضافة أنيميشن عبر CSS
const style = document.createElement("style");
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);
