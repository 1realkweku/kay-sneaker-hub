const products = [
    { id: 1, name: "Air Jordan 1", price: 150, img: "images/Air Jordan 1.jpg" },
    { id: 2, name: "Nike Air Max 90", price: 180, img: "images/Nike Air Max 90.jpg" },
    { id: 3, name: "Adidas Yeezy Boost 350", price: 220, img: "images/Adidas Yeezy Boost.jpg" },
    { id: 4, name: "Puma RS-X3", price: 130, img: "images/Puma RS-X3.jpg" },
    { id: 5, name: "Converse Chuck Taylor", price: 75, img: "images/Converse Chuck Taylor.jpg" },
    { id: 6, name: "Reebok Classic Leather", price: 90, img: "images/Reebok Classic Leather.jpg" },
    { id: 7, name: "New Balance 990v5", price: 175, img: "images/New Balance 990v5.jpg" },
    { id: 8, name: "Vans Old Skool", price: 60, img: "images/Vans Old Skool.jpg" },
    { id: 9, name: "ASICS Gel-Kayano 27", price: 140, img: "images/asics gel kayano 27.jpg" },
    { id: 10, name: "Under Armour HOVR Phantom 2", price: 160, img: "images/under armour hovr phantom 2.jpg" },
    { id: 11, name: "Fila Disruptor 2", price: 110, img: "images/fila disruptor 2.jpg" },
    { id: 12, name: "Saucony Jazz Original", price: 85, img: "images/saucony jazz original.jpg" },
    { id: 13, name: "Nike Dunk Low", price: 120, img: "images/nike dunk low.jpg" },
    { id: 14, name: "Adidas NMD R1", price: 140, img: "images/adidas nmd r1.jpg" },
    { id: 15, name: "Jordan Retro 4", price: 210, img: "images/jordan retro 4.jpg" },
    { id: 16, name: "Puma Suede Classic", price: 75, img: "images/puma suede classic.jpg" },
    { id: 17, name: "Reebok Zig Kinetica", price: 130, img: "images/reebok zig kinetica.jpg" },
    { id: 18, name: "New Balance Fresh Foam", price: 150, img: "images/new balance fresh foam.jpg" },
    { id: 19, name: "Vans Authentic", price: 50, img: "images/vans authentic.jpg" },
    { id: 20, name: "ASICS Gel Lyte III", price: 125, img: "images/ASICS Gel-Lyte III.jpg" },
];

const images = ['']
// Cart Array
let cart = [];

// Number of products displayed initially
let visibleProducts = 4;

// Render products dynamically
function renderProducts() {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";
    const displayedProducts = products.slice(0, visibleProducts);
    

    displayedProducts.forEach((product) => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });

  
    // Toggle visibility of "Load More" button
    document.getElementById("loadMoreButton").style.display = visibleProducts >= products.length ? "none" : "block";
}

// Add a product to the cart
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    cart.push(product);
    updateCart();
    alert(`${product.name} has been added to your cart!`);
}

// Update the cart UI and calculate total
function updateCart() {
    const cartList = document.getElementById("cartList");
    const cartTotal = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        cartList.innerHTML += `
            <li>${item.name} - $${item.price}</li>
        `;
        total += item.price;
    });

    cartTotal.textContent = `Total: $${total}`;
}

// Load More Products
document.getElementById("loadMoreButton").addEventListener("click", () => {
    visibleProducts += 6;
    renderProducts();
});


// Initial Render
renderProducts();
