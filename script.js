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
        price: 6500,
        oldPrice: 7500,
        rating: 5,
        discount: "CLINICALLY TESTED",
        image: "Gemini_Generated_Image_brvq76brvq76brvq.png",
        weight: "2 KG",
        servings: "60 Servings",
        flavours: ["Rich Chocolate", "Cookies & Cream", "Mango"],
        description: "Premium whey protein for muscle growth and recovery."
    },
    { 
        id: 2, 
        name: "Biozyme Performance Whey Protein (1kg)", 
        brand: "MuscleBlaze", 
        price: 3600, 
        oldPrice: 3800, 
        rating: 5, 
        discount: "CLINICALLY TESTED",
        image: "download.jpg",
        weight: "1 KG",
        servings: "30 Servings",
        flavours: ["Rich Chocolate", "Cafe Mocha"],
        description: "Clinically tested Biozyme performance whey protein for enhanced muscle protein synthesis."
    },
    { 
        id: 4, 
        name: "Creatine Monohydrate Creapure Powder (100g / 250g)", 
        brand: "MuscleBlaze", 
        price: 480, 
        oldPrice: 1200, 
        rating: 5, 
        discount: "100% PURE",
        image: "Screenshot_2026-05-07_211353-removebg-preview.png",
        weight: "250g",
        servings: "80 Servings",
        flavours: ["Unflavored"],
        description: "100% pure micronized creatine monohydrate for strength and power output."
    },
    { 
        id: 5, 
        name: "Pre-Workout WrathX Intense Energy Catalyst (340g)", 
        brand: "MuscleBlaze", 
        price: 1200, 
        oldPrice: 1450, 
        rating: 5, 
        discount: "HIGH STIM",
        image: "71oW0IcaH-L._AC_UF1000_1000_QL80_-removebg-preview.png",
        weight: "340g",
        servings: "30 Servings",
        flavours: ["Fruit Punch", "Extreme Explosion"],
        description: "High stimulation pre-workout catalyst for extreme focus and explosive energy."
    },
    { 
        id: 6, 
        name: "ON CREATINE MICRONIZED POWDER (250gm)", 
        brand: "OPTIMUM NUTRITION", 
        price: 800, 
        oldPrice: 1100, 
        rating: 5, 
        discount: "ULTRA FILTERED",
        image: "Screenshot_2026-05-06_230302-removebg-preview.png",
        weight: "250g",
        servings: "60 Servings",
        flavours: ["Unflavored"],
        description: "Optimum Nutrition micronized creatine powder to support muscle endurance and performance."
    },
    { 
        id: 7, 
        name: "HK Vitals Omega 3 Fish Oil (90 Capsules)", 
        brand: "Nutrified", 
        price: 590, 
        oldPrice: 750, 
        rating: 4, 
        discount: "JOINT HEALTH",
        image: "Screenshot_2026-05-06_231201-removebg-preview.png",
        weight: "90 Capsules",
        servings: "90 Servings",
        flavours: ["Standard"],
        description: "Premium omega 3 fish oil capsules for joint support and cardiovascular health."
    },
    { 
        id: 8, 
        name: "pintola oats 27gm high protein oats | 1kg", 
        brand: "pintola oats", 
        price: 480, 
        oldPrice: 530, 
        rating: 5, 
        discount: "high protein",
        image: "Screenshot 2026-10-22 160038.png",
        weight: "1 KG",
        servings: "30 Servings",
        flavours: ["Dark Chocolate", "Classic"],
        description: "High protein rolled oats packed with nutrition for a healthy fitness breakfast."
    },
    { 
        id: 9, 
        name: "SHAKER OPTIONAL", 
        brand: "SUPPLEMENT CLUB", 
        price: 99, 
        oldPrice: 350, 
        rating: 4, 
        discount: "ACCESSORY",
        image: "Screenshot 2026-10-23 123658.png",
        weight: "Standard",
        servings: "1 Unit",
        flavours: ["Black", "Red"],
        description: "Leak-proof gym shaker bottle for mixing your protein and supplements smoothly."
    },
    { 
        id: 10, 
        name: "GYM WRIST WRAPS", 
        brand: "Health Ninja", 
        price: 250, 
        oldPrice: 300, 
        rating: 5, 
        discount: "GEAR",
        image: "Screenshot_2026-05-07_104307-removebg-preview.png",
        weight: "Standard",
        servings: "1 Pair",
        flavours: ["Black/Red"],
        description: "Heavy duty wrist wraps for wrist support during heavy bench presses and shoulder presses."
    },
    { 
        id: 11, 
        name: "HK Vitals Multivitamin (90 Capsules)", 
        brand: "HK Vitals", 
        price: 590, 
        oldPrice: 750, 
        rating: 4, 
        discount: "DAILY HEALTH",
        image: "Screenshot_2026-05-06_230736-removebg-preview.png",
        weight: "90 Capsules",
        servings: "90 Servings",
        flavours: ["Standard"],
        description: "Complete multivitamin supplement for daily vitality, immunity, and well-being."
    },
    { 
        id: 12, 
        name: "MuscleTech Creatine Monohydrate 250gm", 
        brand: "MuscleTech", 
        price: 800, 
        oldPrice: 1100, 
        rating: 5, 
        discount: "MUSCLE TECH",
        image: "Screenshot_2026-05-06_230018-removebg-preview.png",
        weight: "250g",
        servings: "60 Servings",
        flavours: ["Unflavored"],
        description: "MuscleTech pure HPLC tested creatine monohydrate to build lean muscle mass."
    },
    { 
        id: 14, 
        name: "Wellcore Micronized Pure Creatine Monohydrate (307g)", 
        brand: "Wellcore", 
        price: 850, 
        oldPrice: 1400, 
        rating: 5, 
        discount: "PRO SAVER",
        image: "Screenshot_2026-05-07_210231-removebg-preview.png",
        weight: "307g",
        servings: "85 Servings",
        flavours: ["Unflavored"],
        description: "Wellcore micronized pure creatine monohydrate for superior absorption and strength."
    },
    { 
        id: 15, 
        name: "Wellcore CREATINE Ultimate ATP Muscle Hydrator Stack (122g)", 
        brand: "Wellcore", 
        price: 500, 
        oldPrice: 700, 
        rating: 5, 
        discount: "MAX EXPLOSION",
        image: "Screenshot_2026-05-07_210138-removebg-preview.png",
        weight: "122g",
        servings: "30 Servings",
        flavours: ["Blue Raspberry"],
        description: "Advanced ATP muscle hydrator stack to boost workout performance and cell hydration."
    },
    { 
        id: 16, 
        name: "Pure farm Peanut Butter 925gm", 
        brand: "pure farm", 
        price: 530, 
        oldPrice: 700, 
        rating: 5, 
        discount: "jaggery flavour",
        image: "Screenshot 2026-10-22 161314.png",
        weight: "925g",
        servings: "30 Servings",
        flavours: ["Jaggery", "Classic"],
        description: "Delicious and healthy natural peanut butter flavored with jaggery."
    },
    { 
        id: 17, 
        name: "Pintola High Protein Peanut Butter 1 kg", 
        brand: "Pintola", 
        price: 550, 
        oldPrice: 750, 
        rating: 5, 
        discount: "HIGH PROTEIN",
        image: "Screenshot 2026-10-22 163035.png",
        weight: "1 KG",
        servings: "33 Servings",
        flavours: ["Dark Chocolate", "All Natural"],
        description: "Pintola high protein peanut butter enriched with whey protein isolate."
    },
    { 
        id: 21, 
        name: "MuscleBlaze BCAA Pro Intra Workout Amino Recovery", 
        brand: "MuscleBlaze", 
        price: 999, 
        oldPrice: 2000, 
        rating: 5, 
        discount: "VASCULAR",
        image: "NB-MBZ-1007-05-01-800x800-removebg-preview.png",
        weight: "250g",
        servings: "30 Servings",
        flavours: ["Green Apple", "Watermelon"],
        description: "Advanced BCAA powder with electrolytes for intra-workout recovery and stamina."
    },
    { 
        id: 22, 
        name: "RDX Preworkout 300g", 
        brand: "Muscle Doctor", 
        price: 1400, 
        oldPrice: 1600, 
        rating: 5, 
        discount: "VASCULAR",
        image: "Screenshot_2026-05-06_223534-removebg-preview.png",
        weight: "300g",
        servings: "30 Servings",
        flavours: ["Fruit Punch"],
        description: "Intense pre-workout supplement for extreme muscle pumps and high energy."
    },
    { 
        id: 23, 
        name: "Pintola Muesli 1 kg", 
        brand: "Pintola", 
        price: 570, 
        oldPrice: 650, 
        rating: 5, 
        discount: "FIT BREAKFAST",
        image: "Screenshot_2026-05-05_192017-removebg-preview (1).png",
        weight: "1 KG",
        servings: "25 Servings",
        flavours: ["Fruits & Nuts", "Choco Cranberry"],
        description: "Nutritious and crunchy muesli loaded with whole grains, fruits, and nuts."
    },
    { 
        id: 24, 
        name: "Xnano Gainer Anabolic Mass Gainer 5 lbs", 
        brand: "Xnano", 
        price: 3350, 
        oldPrice: 3999, 
        rating: 5, 
        discount: "ANABOLIC",
        image: "Screenshot_2026-05-06_223310-removebg-preview.png",
        weight: "5 lbs",
        servings: "15 Servings",
        flavours: ["Chocolate Fudge", "Banana"],
        description: "Anabolic mass gainer formula designed for serious weight gain and muscle mass."
    },
    { 
        id: 25, 
        name: "Xnano Gainer Lean Mass Gainer 5 lbs", 
        brand: "Xnano", 
        price: 3350, 
        oldPrice: 3999, 
        rating: 5, 
        discount: "LEAN MASS",
        image: "Screenshot_2026-05-06_223057-removebg-preview (1).png",
        weight: "5 lbs",
        servings: "15 Servings",
        flavours: ["Chocolate", "Vanilla"],
        description: "Lean mass gainer with balanced protein-to-carb ratio for clean muscle building."
    },
    { 
        id: 26, 
        name: "Fuel One Whey Protein 1 kg", 
        brand: "Fuel One", 
        price: 1999, 
        oldPrice: 2100, 
        rating: 5, 
        discount: "WHEY PROTEIN",
        image: "Screenshot_2026-05-06_222347-removebg-preview.png",
        weight: "1 KG",
        src: "30 Servings",
        servings: "30 Servings",
        flavours: ["Chocolate", "Coffee"],
        description: "Affordable and effective whey protein to support daily fitness goals."
    },
    { 
        id: 27, 
        name: "MB fish oil (60 capsules)", 
        brand: "mb", 
        price: 600, 
        oldPrice: 700, 
        rating: 5, 
        discount: "joint health",
        image: "Screenshot 2026-10-22 162707.png",
        weight: "60 Capsules",
        servings: "60 Servings",
        flavours: ["Standard"],
        description: "MuscleBlaze fish oil capsules rich in Omega-3 fatty acids for heart and joint care."
    },
    { 
        id: 28, 
        name: "Stainless Steel Shaker", 
        brand: "Steel Shaker", 
        price: 250, 
        oldPrice: 300, 
        rating: 5, 
        discount: "out of stock",
        image: "Screenshot_2026-07-12_123832-removebg-preview.png",
        weight: "Standard",
        servings: "1 Unit",
        flavours: ["Silver", "Black"],
        description: "Durable stainless steel shaker bottle with odor-free technology."
    },
    { 
        id: 33, 
        name: "hk vitual multivitamin+men", 
        brand: "hk", 
        price: 729, 
        oldPrice: 1000, 
        rating: 4, 
        discount: "vitamin",
        image: "Screenshot_2026-08-22_164324-removebg-preview.png",
        weight: "60 Tablets",
        servings: "60 Servings",
        flavours: ["Standard"],
        description: "Multivitamin formulated specifically for active men to boost energy and immunity."
    },
    { 
        id: 35, 
        name: "hk vitual ashwagandha", 
        brand: "hk vitual", 
        price: 539, 
        oldPrice: 700, 
        rating: 4, 
        discount: "hk",
        image: "Screenshot_2026-08-22_164536-removebg-preview.png",
        weight: "60 Tablets",
        servings: "60 Servings",
        flavours: ["Standard"],
        description: "Pure ashwagandha extract to help manage stress, anxiety, and boost vitality."
    },
    { 
        id: 36, 
        name: "hk vituals magnesium glycinate", 
        brand: "hk vitual", 
        price: 999, 
        oldPrice: 1500, 
        rating: 4, 
        discount: "health",
        image: "Screenshot_2026-08-24_110616-removebg-preview.png",
        weight: "60 Tablets",
        servings: "60 Servings",
        flavours: ["Standard"],
        description: "Magnesium glycinate supplement for muscle relaxation, bone health, and better sleep."
    },
    { 
        id: 37, 
        name: "hk vitual skin collagen", 
        brand: "hk vitual", 
        price: 899, 
        oldPrice: 1309, 
        rating: 4, 
        discount: "skin",
        image: "Screenshot_2026-08-22_164650-removebg-preview.png",
        weight: "200g",
        servings: "30 Servings",
        flavours: ["Orange", "Strawberry"],
        description: "Skin collagen builder supplement with Vitamin C and hyaluronic acid for glowing skin."
    },
    { 
        id: 38, 
        name: "black beast preworkout 50 servings", 
        brand: "black beast nutrition", 
        price: 1230, 
        oldPrice: 1300, 
        rating: 4, 
        discount: "INTENSE PUMP",
        image: "Screenshot 2026-11-04 205144.png",
        weight: "250g",
        servings: "50 Servings",
        flavours: ["Blue Lagoon", "Blood Orange"],
        description: "Extreme black beast pre-workout powder engineered for high intensity gym sessions."
    },
    { 
        id: 40, 
        name: "liver belt powerlifting", 
        brand: "strength", 
        price: 4999, 
        oldPrice: 6999, 
        rating: 4, 
        discount: "supplement club",
        image: "Screenshot 2026-11-04 204910.png",
        weight: "Standard",
        servings: "1 Unit",
        flavours: ["Black"],
        description: "Heavy-duty powerlifting lever belt designed for maximum core and back support."
    },
    { 
        id: 41, 
        name: "alpino oats 27gm protien 2.27kg", 
        brand: "alpino oats", 
        price: 999, 
        oldPrice: 1099, 
        rating: 4, 
        discount: "out of stock",
        image: "Screenshot_2026-08-24_114606-removebg-preview.png",
        weight: "2.27 KG",
        servings: "75 Servings",
        flavours: ["Classic"],
        description: "Alpino high protein oats bulk pack for wholesome nutrition and muscle recovery."
    },
    { 
        id: 42, 
        name: "pintola oats 27 gm protien 2.27kg", 
        brand: "pintola oats", 
        price: 1049, 
        oldPrice: 1399, 
        rating: 4, 
        discount: "pintola oats",
        image: "Screenshot_2026-08-22_165624-removebg-preview.png",
        weight: "2.27 KG",
        servings: "75 Servings",
        flavours: ["Classic"],
        description: "Pintola high protein jumbo oats in a large economy pack."
    },
    { 
        id: 44, 
        name: "Trueforma® ZMA Enhanced Tablets", 
        brand: "trueforma", 
        price: 590, 
        oldPrice: 700, 
        rating: 4, 
        discount: "INTENSE PUMP",
        image: "Screenshot 2026-10-23 122809.png",
        weight: "90 Tablets",
        servings: "30 Servings",
        flavours: ["Standard"],
        description: "ZMA formula with zinc, magnesium, and vitamin B6 to boost testosterone and recovery."
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
                <img src="${prod.image}" alt="${prod.name}" class="product-loaded-img" onerror="this.src='sssd..png';">
            </div>
            <div class="product-brand">${prod.brand}</div>
            <h3 class="product-name">${prod.name}</h3>
            <div class="product-rating">${structuralStars}</div>
            <div class="product-pricing">
                <span class="price-current">₹${prod.price.toLocaleString("en-IN")}</span>
                <span class="price-old">₹${prod.oldPrice.toLocaleString("en-IN")}</span>
            </div>
            <div class="product-card-actions">
                <button class="btn-card btn-add-cart" onclick="event.stopPropagation(); addItemToCartContainer(${prod.id})">Add To Bag</button>
                <button class="btn-card btn-buy-now" onclick="event.stopPropagation(); executeWhatsAppDirectCheckout(${prod.id})">Buy Now</button>
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
        if(menuToggle) menuToggle.classList.toggle("open");
        if(mobileDrawer) mobileDrawer.classList.toggle("open");
        if(drawerOverlay) drawerOverlay.classList.toggle("open");
    };

    if (menuToggle) menuToggle.addEventListener("click", toggleMobileMenu);
    if (drawerClose) drawerClose.addEventListener("click", toggleMobileMenu);
    if (drawerOverlay) drawerOverlay.addEventListener("click", toggleMobileMenu);

    const searchBtn = document.getElementById("search-btn");
    const searchOverlay = document.getElementById("search-overlay");
    const searchClose = document.getElementById("search-close");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    if (searchBtn) searchBtn.addEventListener("click", () => { if(searchOverlay) searchOverlay.classList.add("open"); if(searchInput) searchInput.focus(); });
    if (searchClose) searchClose.addEventListener("click", () => { if(searchOverlay) searchOverlay.classList.remove("open"); });

    const searchHome = document.getElementById("search-home");
    if (searchHome) searchHome.addEventListener("click", () => { if(searchOverlay) searchOverlay.classList.remove("open"); });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if(!searchResults) return;
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
                    if(searchOverlay) searchOverlay.classList.remove("open");
                    openProductDetails(item.id);
                });
                searchResults.appendChild(row);
            });
        });
    }

    const cartBtn = document.getElementById("cart-btn");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartSidebarClose = document.getElementById("cart-sidebar-close");

    if (cartBtn) cartBtn.addEventListener("click", () => { if(cartSidebar) cartSidebar.classList.add("open"); });
    if (cartSidebarClose) cartSidebarClose.addEventListener("click", () => { if(cartSidebar) cartSidebar.classList.remove("open"); });

    const backTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        if (!backTopBtn) return;
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
    const sidebar = document.getElementById("cart-sidebar");
    if(sidebar) sidebar.classList.add("open");
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
        itemsWrapper.innerHTML = `<div class="empty-cart-message"><i class="fas fa-shopping-cart"></i><p>Your selection is currently empty.</p></div>`;
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
}

function openProductDetails(id) {
    window.location.href = `product.html?id=${id}`;
}


// ================= PRODUCT DETAILS PAGE LOGIC =================

if (window.location.pathname.toLowerCase().includes("product.html")) {
    document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);
        const id = Number(params.get("id"));

        const product = PRODUCT_DATABASE.find(p => p.id === id);

        if (product) {
            // PRODUCT NAME
            const productName = document.getElementById("product-name");
            if (productName) productName.textContent = product.name;

            // BRAND
            const productBrand = document.getElementById("product-brand");
            if (productBrand) productBrand.textContent = product.brand;

            // PRICE
            const productPrice = document.getElementById("product-price");
            if (productPrice) productPrice.textContent = "₹" + product.price.toLocaleString("en-IN");

            // DESCRIPTION
            const description = document.getElementById("product-description");
            if (description) description.textContent = product.description || "Premium authentic supplement designed for serious athletes and fitness growth.";

            // SERVINGS
            const servings = document.getElementById("servings");
            if (servings) servings.textContent = product.servings || "Standard";

            // RATING
            const ratingBox = document.getElementById("product-rating");
            if (ratingBox) {
                const rating = product.rating || 5;
                let stars = "";
                for (let i = 1; i <= 5; i++) {
                    stars += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                }
                ratingBox.innerHTML = stars + `<span style="color:#aaa;margin-left:8px;">(${rating}.0 stars)</span>`;
            }

            // MAIN IMAGE
            const mainImage = document.getElementById("main-product-image");
            if (mainImage) {
                mainImage.src = product.image;
                mainImage.alt = product.name;
                mainImage.onerror = function() { this.src = 'sssd..png'; };
            }

            // THUMBNAILS
            const thumbnailContainer = document.getElementById("thumbnail-images");
            if (thumbnailContainer) {
                thumbnailContainer.innerHTML = "";
                const galleryImages = [product.image];

                galleryImages.forEach((image, index) => {
                    const thumb = document.createElement("div");
                    thumb.className = "thumb";
                    if (index === 0) thumb.classList.add("active");
                    thumb.innerHTML = `<img src="${image}" alt="${product.name}" onerror="this.src='sssd..png';">`;

                    thumb.addEventListener("click", () => {
                        if (mainImage) mainImage.src = image;
                        document.querySelectorAll(".product-page .thumb").forEach(item => item.classList.remove("active"));
                        thumb.classList.add("active");
                    });
                    thumbnailContainer.appendChild(thumb);
                });
            }

            // WEIGHT OPTIONS
            const weightBox = document.getElementById("weight-options");
            if (weightBox) {
                weightBox.innerHTML = "";
                let weights = product.weight ? [product.weight] : ["Standard"];

                weights.forEach((weight, index) => {
                    const button = document.createElement("button");
                    button.type = "button";
                    button.textContent = weight;
                    if (index === 0) button.classList.add("selected");
                    button.addEventListener("click", () => {
                        weightBox.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));
                        button.classList.add("selected");
                    });
                    weightBox.appendChild(button);
                });
            }

            // FLAVOUR OPTIONS
            const flavourBox = document.getElementById("flavour-options");
            if (flavourBox) {
                flavourBox.innerHTML = "";
                let flavours = (product.flavours && product.flavours.length) ? product.flavours : ["Original"];

                flavours.forEach((flavour, index) => {
                    const button = document.createElement("button");
                    button.type = "button";
                    button.textContent = flavour;
                    if (index === 0) button.classList.add("selected");
                    button.addEventListener("click", () => {
                        flavourBox.querySelectorAll("button").forEach(btn => btn.classList.remove("selected"));
                        button.classList.add("selected");
                    });
                    flavourBox.appendChild(button);
                });
            }

            // ADD TO CART
            const addCartButton = document.getElementById("add-cart-btn");
            if (addCartButton) {
                addCartButton.onclick = () => {
                    addItemToCartContainer(product.id);
                    alert("Product added to cart.");
                };
            }

            // BUY NOW
            const buyButton = document.getElementById("buy-btn");
            if (buyButton) {
                buyButton.onclick = () => {
                    executeWhatsAppDirectCheckout(product.id);
                };
            }
            
            initializeRecommendedProducts();
        }
    });
}


// ================= RECOMMENDED PRODUCTS ENGINE =================

function initializeRecommendedProducts() {
    const box = document.getElementById("recommended-products");
    if (!box) return;

    const params = new URLSearchParams(window.location.search);
    const currentId = Number(params.get("id"));
    const currentProduct = PRODUCT_DATABASE.find(item => item.id === currentId);
    if (!currentProduct) return;

    let products = PRODUCT_DATABASE.filter(item => item.id !== currentId && item.brand === currentProduct.brand);
    const remainingProducts = PRODUCT_DATABASE.filter(item => item.id !== currentId && !products.some(p => p.id === item.id));

    products = [...products, ...remainingProducts].slice(0, 4);
    box.innerHTML = "";

    products.forEach(product => {
        const rating = Number(product.rating) || 5;
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            stars += i <= rating ? "★" : "☆";
        }

        let discount = 0;
        if (product.oldPrice && product.oldPrice > product.price) {
            discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
        }

        const card = document.createElement("article");
        card.className = "recommended-card";

        card.innerHTML = `
            ${discount > 0 ? `<span class="recommended-sale-badge">${discount}% OFF</span>` : ""}
            <button type="button" class="recommended-wishlist" aria-label="Wishlist"><i class="far fa-heart"></i></button>
            <div class="recommended-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='sssd..png';">
            </div>
            <div class="recommended-content">
                <div class="recommended-brand">${product.brand}</div>
                <div class="recommended-genuine"><i class="fas fa-circle-check"></i> 100% Genuine</div>
                <h3>${product.name}</h3>
                <div class="recommended-rating">
                    <span class="recommended-stars">${stars}</span>
                    <span class="recommended-rating-number">${rating}.0</span>
                    <span class="recommended-verified">Verified</span>
                </div>
                <div class="recommended-price">
                    <strong>₹${product.price.toLocaleString("en-IN")}</strong>
                    ${product.oldPrice ? `<del>₹${product.oldPrice.toLocaleString("en-IN")}</del>` : ""}
                    ${discount > 0 ? `<span class="recommended-save">Save ${discount}%</span>` : ""}
                </div>
                <div class="recommended-delivery"><i class="fas fa-truck-fast"></i> Fast & Secure Delivery</div>
                <div class="recommended-actions">
                    <button type="button" class="recommended-add-cart"><i class="fas fa-cart-plus"></i> ADD TO CART</button>
                    <button type="button" class="recommended-buy-now">BUY NOW</button>
                </div>
            </div>
        `;

        card.addEventListener("click", (event) => {
            if (event.target.closest(".recommended-actions") || event.target.closest(".recommended-wishlist")) return;
            openProductDetails(product.id);
        });

        card.querySelector(".recommended-add-cart").addEventListener("click", (event) => {
            event.stopPropagation();
            addItemToCartContainer(product.id);
        });

        card.querySelector(".recommended-buy-now").addEventListener("click", (event) => {
            event.stopPropagation();
            openProductDetails(product.id);
        });

        card.querySelector(".recommended-wishlist").addEventListener("click", (event) => {
            event.stopPropagation();
            const icon = event.currentTarget.querySelector("i");
            icon.classList.toggle("far");
            icon.classList.toggle("fas");
        });

        box.appendChild(card);
    });
}
