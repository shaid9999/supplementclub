/**
 * SUPPLEMENT CLUB UNIFIED PREMIUM SUPPLEMENT DATABASE ENGINE
 * Production Grid containing requested authentic brands catalogs.
 */

const TARGET_WHATSAPP_NUMBER = "919906873783"; // Configured Store Vector Link

const PRODUCT_DATABASE = [
    {
    id: 1,
    name: "Biozyme Performance Whey Protein (2kg)",
    brand: "MuscleBlaze",
    price: 5800,
    oldPrice: 6500,
    rating: 5,
    discount: "CLINICALLY TESTED",

    image: "Gemini_Generated_Image_brvq76brvq76brvq.png",

    
    weight: "2 KG",

    servings: "60 Servings",

    flavours: [
        "Rich Chocolate",
        "Cookies & Cream",
        "Mango"
    ],

    description: "Premium whey protein for muscle growth and recovery."
},
    { 
        id: 2, 
        name: "Biozyme Performance Whey Protein (1kg)", 
        brand: "MuscleBlaze", 
        price: 2850, 
        oldPrice: 3200, 
        rating: 5, 
        discount: "CLINICALLY TESTED",
        image: "download.jpg"
    },
    
    { 
        id: 4, 
        name: "Creatine Monohydrate Creapure Powder (100g / 250g)", 
        brand: "MuscleBlaze", 
        price: 1099, 
        oldPrice: 1200, 
        rating: 5, 
        discount: "100% PURE",
        image: "Screenshot_2026-05-07_211353-removebg-preview.png"
    },
    { 
        id: 5, 
        name: "Pre-Workout WrathX Intense Energy Catalyst (300g)", 
        brand: "MuscleBlaze", 
        price: 1200, 
        oldPrice: 1450, 
        rating: 5, 
        discount: "HIGH STIM",
        image: "71oW0IcaH-L._AC_UF1000_1000_QL80_-removebg-preview.png"
    },
    { 
        id: 6, 
        name: "ON CREATINE MICRONIZED POWDER (250gm)", 
        brand: "OPTIMUM NUTRITION", 
        price: 800, 
        oldPrice: 1100, 
        rating: 5, 
        discount: "ULTRA FILTERED",
        image: "Screenshot_2026-05-06_230302-removebg-preview.png"
    },
    { 
        id: 7, 
        name: "HK Vitals Omega 3 Fish Oil (90 Capsules)", 
        brand: "Nutrified", 
        price: 590, 
        oldPrice: 750, 
        rating: 4, 
        discount: "JOINT HEALTH",
        image: "Screenshot_2026-05-06_231201-removebg-preview.png"
    },
    { 
        id: 8, 
        name: "Gold Standard 100% Whey Protein | 907 g (2 lbs)", 
        brand: "OPTIMUM NUTRITION", 
        price: 3999, 
        oldPrice: 4500, 
        rating: 5, 
        discount: "STRENGTH ESP",
        image: "Screenshot_2026-05-06_222814-removebg-preview (1).png"
    },
    { 
        id: 9, 
        name: "SHAKER OPTIONAL", 
        brand: "SUPPLEMENT CLUB", 
        price: 99, 
        oldPrice: 350, 
        rating: 4, 
        discount: "ACCESSORY",
        image: "Screenshot_2026-05-07_104851-removebg-preview (1).png"
    },
    { 
        id: 10, 
        name: "GYM WRIST WRAPS", 
        brand: "Health Ninja", 
        price: 250, 
        oldPrice: 300, 
        rating: 5, 
        discount: "GEAR",
        image: "Screenshot_2026-05-07_104307-removebg-preview.png"
    },
    { 
        id: 11, 
        name: "HK Vitals Multivitamin (90 Capsules)", 
        brand: "HK Vitals", 
        price: 590, 
        oldPrice: 750, 
        rating: 4, 
        discount: "DAILY HEALTH",
        image: "Screenshot_2026-05-06_230736-removebg-preview.png"
    },
    { 
        id: 12, 
        name: "MuscleTech Creatine Monohydrate 250gm", 
        brand: "MuscleTech", 
        price: 800, 
        oldPrice: 1100, 
        rating: 5, 
        discount: "MUSCLE TECH",
        image: "Screenshot_2026-05-06_230018-removebg-preview.png"
    },
    
    { 
        id: 14, 
        name: "Wellcore Micronized Pure Creatine Monohydrate (307g)", 
        brand: "Wellcore", 
        price: 850, 
        oldPrice: 1400, 
        rating: 5, 
        discount: "PRO SAVER",
        image: "Screenshot_2026-05-07_210231-removebg-preview.png"
    },
    { 
        id: 15, 
        name: "Wellcore CREATINE Ultimate ATP Muscle Hydrator Stack (122g)", 
        brand: "Wellcore", 
        price: 500, 
        oldPrice: 700, 
        rating: 5, 
        discount: "MAX EXPLOSION",
        image: "Screenshot_2026-05-07_210138-removebg-preview.png"
    },
    { 
        id: 16, 
        name: " Pure farm Peanut Butter 925gm ", 
        brand: "pure farm", 
        price: 530, 
        oldPrice: 700, 
        rating: 5, 
        discount: "jaggery flavour",
        image: "Screenshot 2026-10-22 161314.png"
    },
    { 
        id: 17, 
        name: "Pintola High Protein Peanut Butter 1 kg", 
        brand: "Pintola", 
        price: 550, 
        oldPrice: 750, 
        rating: 5, 
        discount: "HIGH PROTEIN",
        image: "Screenshot 2026-10-22 163035.png"
    },
    
    
   
    { 
        id: 21, 
        name: "MuscleBlaze BCAA Pro Intra Workout Amino Recovery", 
        brand: "MuscleBlaze", 
        price: 1899, 
        oldPrice: 2000, 
        rating: 5, 
        discount: "VASCULAR",
        image: "NB-MBZ-1007-05-01-800x800-removebg-preview.png"
    },
    { 
        id: 22, 
        name: "RDX Preworkout 300g", 
        brand: "Muscle Doctor", 
        price: 1400, 
        oldPrice: 1600, 
        rating: 5, 
        discount: "VASCULAR",
        image: "Screenshot_2026-05-06_223534-removebg-preview.png"
    },
    { 
        id: 23, 
        name: "Pintola Muesli 1 kg", 
        brand: "Pintola", 
        price: 570, 
        oldPrice: 650, 
        rating: 5, 
        discount: "FIT BREAKFAST",
        image: "Screenshot_2026-05-05_192017-removebg-preview (1).png"
    },
    { 
        id: 24, 
        name: "Xnano Gainer Anabolic Mass Gainer 5 lbs", 
        brand: "Xnano", 
        price: 3350, 
        oldPrice: 3999, 
        rating: 5, 
        discount: "ANABOLIC",
        image: "Screenshot_2026-05-06_223310-removebg-preview.png"
    },
    { 
        id: 25, 
        name: "Xnano Gainer Lean Mass Gainer 5 lbs", 
        brand: "Xnano", 
        price: 3350, 
        oldPrice: 3999, 
        rating: 5, 
        discount: "LEAN MASS",
        image: "Screenshot_2026-05-06_223057-removebg-preview (1).png"
    },
    { 
        id: 26, 
        name: "Fuel One Whey Protein 1 kg", 
        brand: "Fuel One", 
        price: 1999, 
        oldPrice: 2100, 
        rating: 5, 
        discount: "WHEY PROTEIN",
        image: "Screenshot_2026-05-06_222347-removebg-preview.png"
    },
    { 
        id: 27, 
        name: "MB fish oil (60 capsules)", 
        brand: "mb ", 
        price: 600, 
        oldPrice: 700, 
        rating: 5, 
        discount: "joint health",
        image: "Screenshot 2026-10-22 162707.png"
    },
    { 
        id: 28, 
        name: "Stainless Steel Shaker", 
        brand: "Steel Shaker", 
        price: 250, 
        oldPrice: 300, 
        rating: 5, 
        discount: "out of stock",
        image: "Screenshot_2026-07-12_123832-removebg-preview.png"
    },
    
    
    
    
    { 
        id: 33, 
        name: "hk vitual multivitamin+men", 
        brand: "hk", 
        price: 729, 
        oldPrice: 1000, 
        rating: 4, 
        discount: "vitamin",
        image: "Screenshot_2026-08-22_164324-removebg-preview.png"
    },{ 
        id: 35, 
        name: " hk vitual ashwagandha", 
        brand: "hk vitual", 
        price: 539, 
        oldPrice: 700, 
        rating: 4, 
        discount: "hk",
        image: "Screenshot_2026-08-22_164536-removebg-preview.png"
    },{ 
        id: 36, 
        name: "hk vituals magnesium glycinate", 
        brand: "hk vitual", 
        price: 999, 
        oldPrice: 1500, 
        rating: 4, 
        discount: "health",
        image: "Screenshot_2026-08-24_110616-removebg-preview.png"
    },{ 
        id: 37, 
        name: "hk vitual skin collagen", 
        brand: "hk vitual", 
        price: 1048, 
        oldPrice: 1309, 
        rating: 4, 
        discount: "skin ",
        image: "Screenshot_2026-08-22_164650-removebg-preview.png"
    },{ 
        id: 38, 
        name: "xnano natural mass gainer", 
        brand: "xnano", 
        price: 3399, 
        oldPrice: 3500, 
        rating: 4, 
        discount: "INTENSE PUMP",
        image: "Screenshot_2026-08-22_164828-removebg-preview.png"
    },,{ 
        id: 40, 
        name: "pintola oats 27gm protien 1kg", 
        brand: "pintola ", 
        price: 480, 
        oldPrice: 520, 
        rating: 4, 
        discount: "pintola",
        image: "Screenshot 2026-10-22 160038.png"
    },{ 
        id: 41, 
        name: "alpino oats 27gm protien 2.27kg", 
        brand: "alpino oats", 
        price: 999, 
        oldPrice: 1099, 
        rating: 4, 
        discount: "out of stock",
        image: "Screenshot_2026-08-24_114606-removebg-preview.png"
    },{ 
        id: 42, 
        name: "pintola oats 27 gm protien 2.27kg", 
        brand: "pintola oats", 
        price: 1049, 
        oldPrice: 1399, 
        rating: 4, 
        discount: "pintola oats",
        image: "Screenshot_2026-08-22_165624-removebg-preview.png"
    },,{ 
        id: 44, 
        name: "xanao lean mass gainer gold", 
        brand: "xnano", 
        price: 3200, 
        oldPrice: 4600, 
        rating: 4, 
        discount: "INTENSE PUMP",
        image: "Screenshot_2026-08-22_165803-removebg-preview (1).png"
    },,,
    { 
        id: 44, 
        name: "xanao lean mass gainer gold", 
        brand: "xnano", 
        price: 3200, 
        oldPrice: 4600, 
        rating: 4, 
        discount: "INTENSE PUMP",
        image: "Screenshot_2026-08-22_165803-removebg-preview (1).png"
    }
    
];

let SHOPPING_CART = [];

document.addEventListener("DOMContentLoaded", () => {
    initializeUnifiedCatalogGrid();
    setupFunctionalInterfaceBindings();
    initializeIntersectionObservers();
    initializeTestimonialEngine();
});

/**
 * Generates the unified luxury grid layout from the target brand database list.
 */
function initializeUnifiedCatalogGrid() {
    const targetGrid = document.getElementById("products-grid");
    if (!targetGrid) return;

    targetGrid.innerHTML = "";

    PRODUCT_DATABASE.forEach(prod => {
        let structuralStars = "";
        for(let i=1; i<=5; i++) {
            structuralStars += i <= prod.rating ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
        }

        const cardElement = document.createElement("div");
cardElement.className = "product-card observe-slide";

cardElement.addEventListener("click", () => {
    openProductDetails(prod.id);
});

cardElement.innerHTML = `
            <span class="badge-discount">${prod.discount}</span>
            <div class="product-img-frame">
                <img src="${prod.image}" alt="${prod.name}" class="product-loaded-img" onerror="this.style.display='none';">
            </div>
            <div class="product-brand">${prod.brand}</div>
            <h3 class="product-name">${prod.name}</h3>
            <div class="product-rating">${structuralStars}</div>
            <div class="product-pricing">
                <span class="price-current">₹${prod.price.toLocaleString("en-IN")}</span>
                <span class="price-old">₹${prod.oldPrice.toLocaleString("en-IN")}</span>
            </div>
            <div class="product-card-actions">
                <button class="btn-card btn-add-cart" onclick="addItemToCartContainer(${prod.id})">Add To Bag</button>
                <button class="btn-card btn-buy-now" onclick="executeWhatsAppDirectCheckout(${prod.id})">Buy Now</button>
            </div>
        `;
        targetGrid.appendChild(cardElement);
    });
}

/**
 * Dynamic Core Event Bindings Matrix
 */
function setupFunctionalInterfaceBindings() {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileDrawer = document.getElementById("mobile-drawer");
    const drawerOverlay = document.getElementById("drawer-overlay");
    const drawerClose = document.getElementById("drawer-close");

    const toggleMobileMenu = () => {
        menuToggle.classList.toggle("open");
        mobileDrawer.classList.toggle("open");
        drawerOverlay.classList.toggle("open");
    };

    if (menuToggle) menuToggle.addEventListener("click", toggleMobileMenu);
    if (drawerClose) drawerClose.addEventListener("click", toggleMobileMenu);
    if (drawerOverlay) drawerOverlay.addEventListener("click", toggleMobileMenu);

    const searchBtn = document.getElementById("search-btn");
    const searchOverlay = document.getElementById("search-overlay");
    const searchClose = document.getElementById("search-close");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    if (searchBtn) searchBtn.addEventListener("click", () => { searchOverlay.classList.add("open"); searchInput.focus(); });
    if (searchClose) searchClose.addEventListener("click", () => searchOverlay.classList.remove("open"));

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = "";
            if (query.length === 0) return;

            const filtered = PRODUCT_DATABASE.filter(item => 
                item.name.toLowerCase().includes(query) || item.brand.toLowerCase().includes(query)
            );

            filtered.slice(0, 5).forEach(item => {
                const row = document.createElement("div");
                row.className = "search-item-row";
                row.innerHTML = `
                    <div style="font-size:20px; color:var(--accent);"><i class="fas fa-bolt"></i></div>
                    <div>
                        <div style="font-size:11px; color:var(--accent); font-weight:700;">${item.brand}</div>
                        <div style="font-size:14px; font-weight:600;">${item.name}</div>
                        <div style="font-size:13px; font-weight:700; margin-top:2px;">₹${item.price.toLocaleString("en-IN")}</div>
                    </div>
                `;
                row.addEventListener("click", () => {
                    searchOverlay.classList.remove("open");
                    document.getElementById("products").scrollIntoView();
                });
                searchResults.appendChild(row);
            });
        });
    }

    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartSidebarClose = document.getElementById("cart-sidebar-close");

    if (cartBtn) cartBtn.addEventListener("click", () => cartSidebar.classList.add("open"));
    if (cartSidebarClose) cartSidebarClose.addEventListener("click", () => cartSidebar.classList.remove("open"));

    const backTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 600) backTopBtn.classList.add("visible");
        else backTopBtn.classList.remove("visible");
    });
    if (backTopBtn) backTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/**
 * DIRECT CUSTOM WHATSAPP DEAL REDIRECTION ROUTER MATRIX
 */
window.executeWhatsAppDirectCheckout = function(id) {
    const itemMatch = PRODUCT_DATABASE.find(p => p.id === id);
    if (!itemMatch) return;

    const messageText = `Hello Supplement Club, I want to buy this product:\n\n*Product:* ${itemMatch.name}\n*Brand:* ${itemMatch.brand}\n*Price:* ₹${itemMatch.price.toLocaleString("en-IN")}\n\nPlease let me know the process to lock this deal!`;
    window.open(`https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`, '_blank');
};

window.checkoutEntireCartViaWhatsApp = function() {
    if (SHOPPING_CART.length === 0) {
        alert("Your selection is empty!");
        return;
    }

    let itemStringList = "";
    let calculatedSum = 0;

    SHOPPING_CART.forEach((item, index) => {
        calculatedSum += item.price;
        itemStringList += `${index + 1}. ${item.name} (${item.brand}) - ₹${item.price.toLocaleString("en-IN")}\n`;
    });

    const fullMessage = `Hello Supplement Club, I want to execute a bulk stack purchase:\n\n${itemStringList}\n*Total Bag Value:* ₹${calculatedSum.toLocaleString("en-IN")}\n\nPlease verify allocation availability!`;
    window.open(`https://wa.me/${TARGET_WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`, '_blank');
};

window.addItemToCartContainer = function(id) {
    const itemMatch = PRODUCT_DATABASE.find(p => p.id === id);
    if (!itemMatch) return;

    SHOPPING_CART.push(itemMatch);
    synchronizeCartStateUI();
    document.getElementById("cart-sidebar").classList.add("open");
};

window.removeCartItemInstance = function(index) {
    SHOPPING_CART.splice(index, 1);
    synchronizeCartStateUI();
};

function synchronizeCartStateUI() {
    const badgeCounts = document.querySelectorAll(".cart-count");
    badgeCounts.forEach(el => el.textContent = SHOPPING_CART.length);

    const itemsWrapper = document.getElementById("cart-sidebar-items");
    const totalLabel = document.getElementById("cart-subtotal");
    if (!itemsWrapper) return;

    if (SHOPPING_CART.length === 0) {
        itemsWrapper.innerHTML = `<div class="empty-cart-message">Your selection is currently empty.</div>`;
        if (totalLabel) totalLabel.textContent = "₹0";
        return;
    }

    itemsWrapper.innerHTML = "";
    let aggregatedSum = 0;

    SHOPPING_CART.forEach((item, index) => {
        aggregatedSum += item.price;
        const row = document.createElement("div");
        row.className = "cart-row-item";
        row.innerHTML = `
            <div>
                <h4 style="font-size:13px; font-weight:700;">${item.name}</h4>
                <p style="font-size:12px; color:var(--accent); margin-top:2px;">₹${item.price.toLocaleString("en-IN")}</p>
            </div>
            <button class="cart-row-remove" onclick="removeCartItemInstance(${index})"><i class="fas fa-trash-alt"></i></button>
        `;
        itemsWrapper.appendChild(row);
    });

    if (totalLabel) totalLabel.textContent = `₹${aggregatedSum.toLocaleString("en-IN")}`;
}

function initializeIntersectionObservers() {
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".observe-fade, .observe-slide, .product-card").forEach(tgt => animationObserver.observe(tgt));
}

function initializeTestimonialEngine() {
    const track = document.getElementById("testimonial-track");
    if (!track) return;
    let shift = 0;
    setInterval(() => {
        shift = shift === 0 ? 50 : 0;
        track.style.transform = `translateX(-${shift}%)`;
    }, 5000);
}function openProductDetails(id) {
    window.location.href = `product.html?id=${id}`;
}

if (window.location.pathname.includes("product.html")) {

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const product = PRODUCT_DATABASE.find(p => p.id === id);

}// ================= PRODUCT DETAILS PAGE =================

if (window.location.pathname.includes("product.html")) {

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    const product = PRODUCT_DATABASE.find(p => p.id === id);

    if (product) {

        // PRODUCT NAME
        const productName = document.getElementById("product-name");

        if (productName) {
            productName.textContent = product.name;
        }


        // BRAND
        const productBrand = document.getElementById("product-brand");

        if (productBrand) {
            productBrand.textContent = product.brand;
        }


        // PRICE
        const productPrice = document.getElementById("product-price");

        if (productPrice) {
            productPrice.textContent =
                "₹" + product.price.toLocaleString("en-IN");
        }


        // DESCRIPTION
        const description =
            document.getElementById("product-description");

        if (description) {
            description.textContent =
                product.description || "";
        }


        // SERVINGS
        const servings =
            document.getElementById("servings");

        if (servings) {
            servings.textContent =
                product.servings || "-";
        }


        // RATING
        const ratingBox =
            document.getElementById("product-rating");

        if (ratingBox) {

            const rating = product.rating || 0;

            let stars = "";

            for (let i = 1; i <= 5; i++) {

                if (i <= rating) {
                    stars +=
                        '<i class="fas fa-star"></i>';
                } else {
                    stars +=
                        '<i class="far fa-star"></i>';
                }

            }

            ratingBox.innerHTML =
                stars +
                `<span style="color:#aaa;margin-left:8px;">
                    (${rating}.0 stars)
                </span>`;
        }


        // MAIN IMAGE
        const mainImage =
            document.getElementById("main-product-image");

        if (mainImage) {

            mainImage.src = product.image;
            mainImage.alt = product.name;

        }


        // THUMBNAILS
        const thumbnailContainer =
            document.getElementById("thumbnail-images");

        if (thumbnailContainer) {

            thumbnailContainer.innerHTML = "";

            const galleryImages =
                product.images && product.images.length
             
