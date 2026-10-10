// --- NOMOR ADMIN (GANTI DENGAN NOMOR KAMU!) ---
const ADMIN_PHONE = "6281234567890";
const ADMIN_PHONE_DISPLAY = "+62 812-3456-7890";

// --- ADMIN CREDENTIALS ---
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// --- DATA PRODUK ---
let products = [
    { id: 1, name: "Croffle Original", price: 15000, category: "Croffle", img: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Croffle renyah dengan topping butter dan gula pilihan." },
    { id: 2, name: "Croffle Choco", price: 17000, category: "Croffle", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Croffle dengan lelehan cokelat premium." },
    { id: 3, name: "Croffle Biscoff", price: 20000, category: "Croffle", img: "https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Croffle dengan saus Biscoff legit." },
    { id: 4, name: "Croffle Strawberry", price: 18000, category: "Croffle", img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Croffle dengan stroberi segar." },
    { id: 5, name: "Tiramisu Dessert Box", price: 25000, category: "Dessert Box", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Dessert box lembut dengan rasa kopi dan mascarpone." },
    { id: 6, name: "Oreo Dessert Box", price: 22000, category: "Dessert Box", img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Dessert box dengan crumble oreo." },
    { id: 7, name: "Matcha Dessert Box", price: 22000, category: "Dessert Box", img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Dessert box matcha premium." },
    { id: 8, name: "Red Velvet Dessert Box", price: 24000, category: "Dessert Box", img: "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Dessert box red velvet lembut." },
    { id: 9,  name: "Iced Strawberry Latte", price: 18000, category: "Minuman", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Minuman segar dengan susu dan stroberi asli." },
    { id: 10, name: "Matcha Latte", price: 16000, category: "Minuman", img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Matcha latte creamy." },
    { id: 11, name: "Brown Sugar Milk", price: 17000, category: "Minuman", img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Brown sugar dengan susu segar." },
    { id: 12, name: "Chocolate Milk", price: 15000, category: "Minuman", img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80", desc: "Cokelat susu klasik." }
];

// --- BEST SELLER (ID produk yang jadi best seller) ---
let bestSellerIds = [2, 5, 9];

// --- DATA ULASAN ---
let reviews = [
    { name: "Sarah Amelia", initial: "S", color: "#E91E63", rating: 5, date: "2 hari lalu", text: "Croffle-nya renyah banget! Topping cokelatnya melimpah, bikin nagih. Pasti repeat order! 🥰", photo: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Budi Santoso", initial: "B", color: "#3F51B5", rating: 5, date: "5 hari lalu", text: "Dessert box Tiramisu-nya juara! Rasanya pas, nggak terlalu manis.", photo: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Maya Putri", initial: "M", color: "#FF9800", rating: 4, date: "1 minggu lalu", text: "Iced Strawberry Latte-nya segar! Pengiriman cepat, packing rapi. 👍", photo: null },
    { name: "Andi Wijaya", initial: "A", color: "#4CAF50", rating: 5, date: "2 minggu lalu", text: "Sudah langganan dari awal buka. Kualitas konsisten!", photo: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Rina Lestari", initial: "R", color: "#9C27B0", rating: 5, date: "3 minggu lalu", text: "Pesen buat acara keluarga, semua pada suka! ✨", photo: null }
];

// --- DATA PESANAN (RIWAYAT) ---
let orders = [
    { id: "#SC2410255", date: "25 Okt 2025", total: 42000, status: "selesai" },
    { id: "#SC2410248", date: "24 Okt 2025", total: 38000, status: "dikirim" },
    { id: "#SC2410240", date: "23 Okt 2025", total: 30000, status: "diproses" },
    { id: "#SC2410232", date: "22 Okt 2025", total: 55000, status: "selesai" },
    { id: "#SC2410225", date: "21 Okt 2025", total: 28000, status: "diproses" }
];

// --- STATE ---
let cart = [];
let detailQty = 1;
let isDarkMode = false;
let carouselIndex = 0;
let carouselInterval = null;
let selectedRating = 5;
let selectedPhoto = null;
let isAdminLoggedIn = false;
let currentDelivery = 'Delivery';
let currentPayment = 'Cash';

// ==============================================
// ===== NAVIGASI =====
// ==============================================
function switchTab(screenId, el) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId + '-screen');
    if(target) target.classList.add('active');
    window.scrollTo(0, 0);
    if(el) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
    }
}

function goToHome() {
    switchTab('home');
    renderCarousel();
    renderReviews();
}

function goToCart(el) {
    switchTab('cart', el);
    renderCart();
}

// ===== ADMIN ACCESS =====
function goToAdmin(el) {
    if(el) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
    }
    if(isAdminLoggedIn) {
        switchTab('admin');
    } else {
        switchTab('admin-login');
    }
}

function loginAdmin() {
    const user = document.getElementById('admin-user').value.trim();
    const pass = document.getElementById('admin-pass').value.trim();
    
    if(user === ADMIN_USER && pass === ADMIN_PASS) {
        isAdminLoggedIn = true;
        document.getElementById('admin-user').value = '';
        document.getElementById('admin-pass').value = '';
        switchTab('admin');
        renderAdminStats();
    } else {
        alert('❌ Username atau password salah!\n\nHint: admin / admin123');
    }
}

function logoutAdmin() {
    if(confirm('Yakin ingin logout dari Admin?')) {
        isAdminLoggedIn = false;
        switchTab('home');
    }
}

function renderAdminStats() {
    const statProducts = document.getElementById('stat-products');
    const statOrders = document.getElementById('stat-orders');
    if(statProducts) statProducts.textContent = products.length;
    if(statOrders) statOrders.textContent = orders.length + 18; // Simulasi
}

// ===== ADMIN PANEL NAVIGASI =====
function openAdminPanel(panel) {
    if(panel === 'menu') {
        renderAdminProducts();
        switchTab('panel-menu');
    } else if(panel === 'ads') {
        renderAdminAds();
        switchTab('panel-ads');
    } else if(panel === 'payment') {
        switchTab('panel-payment');
    } else if(panel === 'store') {
        switchTab('panel-store');
    } else if(panel === 'reports') {
        switchTab('panel-reports');
    }
}

// ===== KELOLA MENU =====
function renderAdminProducts() {
    const container = document.getElementById('admin-product-list');
    if(!container) return;
    container.innerHTML = '';
    
    products.forEach(p => {
        const div = document.createElement('div');
        div.className = 'admin-product-item';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <div class="admin-product-info">
                <h4>${p.name}</h4>
                <p>Rp ${p.price.toLocaleString('id-ID')}</p>
                <span>${p.category}</span>
            </div>
            <div class="admin-product-actions">
                <button class="admin-icon-btn" onclick="editProduct(${p.id})"><i class="fas fa-edit"></i></button>
                <button class="admin-icon-btn danger" onclick="deleteProduct(${p.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        container.appendChild(div);
    });
}

function deleteProduct(id) {
    if(confirm('Yakin ingin menghapus produk ini?')) {
        products = products.filter(p => p.id !== id);
        renderAdminProducts();
        renderAdminStats();
        alert('✅ Produk berhasil dihapus!');
    }
}

function editProduct(id) {
    const p = products.find(x => x.id === id);
    const newName = prompt('Nama produk:', p.name);
    if(newName === null) return;
    const newPrice = prompt('Harga:', p.price);
    if(newPrice === null) return;
    p.name = newName;
    p.price = parseInt(newPrice) || p.price;
    renderAdminProducts();
    alert('✅ Produk berhasil diupdate!');
}

function openAddProductModal() {
    document.getElementById('product-modal').classList.add('active');
}

function closeAddProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}

function addNewProduct() {
    const name = document.getElementById('new-prod-name').value.trim();
    const price = parseInt(document.getElementById('new-prod-price').value);
    const category = document.getElementById('new-prod-category').value;
    const img = document.getElementById('new-prod-img').value.trim() || "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
    
    if(!name || !price) { alert('Nama & harga harus diisi!'); return; }
    
    const newId = Math.max(...products.map(p => p.id)) + 1;
    products.push({ id: newId, name, price, category, img, desc: "Produk baru dari Sweet Crumbs" });
    renderAdminProducts();
    renderAdminStats();
    closeAddProductModal();
    alert('✅ Produk berhasil ditambahkan!');
}

// ===== KELOLA IKLAN (BEST SELLER) =====
function renderAdminAds() {
    const container = document.getElementById('admin-ads-list');
    if(!container) return;
    container.innerHTML = '';
    
    products.forEach(p => {
        const isActive = bestSellerIds.includes(p.id);
        const div = document.createElement('div');
        div.className = 'admin-product-item';
        div.innerHTML = `
            <img src="${p.img}" alt="${p.name}">
            <div class="admin-product-info">
                <h4>${p.name}</h4>
                <p>Rp ${p.price.toLocaleString('id-ID')}</p>
                <span>${isActive ? '⭐ Best Seller' : 'Produk Biasa'}</span>
            </div>
            <div class="admin-product-actions">
                <button class="admin-icon-btn ${isActive ? 'danger' : ''}" onclick="toggleBestSeller(${p.id})">
                    <i class="fas fa-${isActive ? 'times' : 'star'}"></i>
                </button>
            </div>
        `;
        container.appendChild(div);
    });
}

function toggleBestSeller(id) {
    if(bestSellerIds.includes(id)) {
        bestSellerIds = bestSellerIds.filter(x => x !== id);
    } else {
        if(bestSellerIds.length >= 3) {
            alert('⚠️ Maksimal 3 produk Best Seller!');
            return;
        }
        bestSellerIds.push(id);
    }
    renderAdminAds();
}

// ===== CHECKOUT: PILIH DELIVERY & PAYMENT =====
function selectDelivery(type, el) {
    currentDelivery = type;
    document.querySelectorAll('.delivery-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    
    const shipping = document.getElementById('checkout-shipping');
    if(shipping) {
        shipping.textContent = (type === 'PickUp') ? '—' : 'Rp 10.000';
    }
    updateCheckoutTotal();
}

function selectPayment(type, el) {
    currentPayment = type;
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
}

function updateCheckoutTotal() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let shipping = (currentDelivery === 'PickUp') ? 0 : 10000;
    let total = subtotal + shipping;
    
    document.getElementById('checkout-subtotal').textContent = "Rp " + subtotal.toLocaleString('id-ID');
    document.getElementById('checkout-shipping').textContent = shipping === 0 ? '—' : 'Rp ' + shipping.toLocaleString('id-ID');
    document.getElementById('checkout-total').textContent = "Rp " + total.toLocaleString('id-ID');
    document.getElementById('btn-total').textContent = "Rp " + total.toLocaleString('id-ID');
}

// ===== CHECKOUT =====
function goToCheckout() {
    if(cart.length === 0) { alert("Keranjang masih kosong!"); return; }
    switchTab('checkout');
    updateCheckoutTotal();
}

function showHistory() {
    // Tambah order baru ke riwayat
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const newOrder = {
        id: "#SC" + Math.floor(Math.random() * 9000000 + 1000000),
        date: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }),
        total: total,
        status: "diproses"
    };
    orders.unshift(newOrder);
    
    alert("✅ Pesanan berhasil dibuat!\n\nStatus: Sedang Diproses");
    cart = [];
    switchTab('history');
    renderHistory('all');
}

// ===== RIWAYAT DENGAN FILTER =====
function filterHistory(status, el) {
    document.querySelectorAll('.history-tabs span').forEach(s => s.classList.remove('active'));
    el.classList.add('active');
    renderHistory(status);
}

function renderHistory(filter = 'all') {
    const container = document.getElementById('history-list');
    if(!container) return;
    container.innerHTML = '';
    
    const filtered = (filter === 'all') ? orders : orders.filter(o => o.status === filter);
    
    if(filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#999;padding:30px;">Belum ada pesanan</p>';
        return;
    }
    
    filtered.forEach(o => {
        const div = document.createElement('div');
        div.className = 'history-card';
        div.innerHTML = `
            <div class="history-header">
                <span>${o.id}</span>
                <span class="status ${o.status}">${o.status.charAt(0).toUpperCase() + o.status.slice(1)}</span>
            </div>
            <p>${o.date} - Rp ${o.total.toLocaleString('id-ID')}</p>
        `;
        container.appendChild(div);
    });
}

// ===== DROPDOWN =====
function toggleDropdown(event) {
    event.stopPropagation();
    document.getElementById('dropdown-menu').classList.toggle('active');
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('dropdown-menu');
    if(menu && !e.target.closest('.menu-dots-wrapper')) menu.classList.remove('active');
});

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    const icon = document.querySelector('#dropdown-menu .dropdown-item:first-child i');
    const text = document.querySelector('#dropdown-menu .dropdown-item:first-child span');
    if(isDarkMode) { icon.className = 'fas fa-sun'; text.textContent = 'Mode Terang'; }
    else { icon.className = 'fas fa-moon'; text.textContent = 'Mode Gelap'; }
    document.getElementById('dropdown-menu').classList.remove('active');
    localStorage.setItem('darkMode', isDarkMode);
}

function goToAbout() {
    document.getElementById('dropdown-menu').classList.remove('active');
    switchTab('about');
}

function goToHelp() {
    document.getElementById('dropdown-menu').classList.remove('active');
    switchTab('help');
}

function chatAdmin() {
    const pesan = encodeURIComponent("Halo Admin Sweet Crumbs! 👋\n\nSaya ingin bertanya tentang produk Anda.");
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${pesan}`, '_blank');
}
function callAdmin() { window.location.href = `tel:+${ADMIN_PHONE}`; }
function emailAdmin() { window.location.href = "mailto:hello@sweetcrumbs.id?subject=Pertanyaan%20dari%20Aplikasi%20Sweet%20Crumbs"; }
function toggleFaq(el) { el.classList.toggle('open'); }

// ===== CAROUSEL =====
function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if(!track) return;
    track.innerHTML = '';
    dotsContainer.innerHTML = '';
    
    const bsProducts = bestSellerIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    const badges = ["BEST SELLER", "TOP RATED", "NEW FAVORITE"];
    
    bsProducts.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="carousel-card-info">
                <span class="carousel-badge">${badges[index] || 'BEST SELLER'}</span>
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <span class="price-tag">Rp ${item.price.toLocaleString('id-ID')}</span>
            </div>
            <img src="${item.img}" alt="${item.name}" class="carousel-card-img">
        `;
        track.appendChild(card);
        const dot = document.createElement('div');
        dot.className = 'carousel-dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    startCarousel();
}

function goToSlide(index) {
    carouselIndex = index;
    const track = document.getElementById('carousel-track');
    if(track) track.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => dot.classList.toggle('active', i === index));
}

function startCarousel() {
    if(carouselInterval) clearInterval(carouselInterval);
    const count = bestSellerIds.length;
    carouselInterval = setInterval(() => {
        carouselIndex = (carouselIndex + 1) % count;
        goToSlide(carouselIndex);
    }, 3500);
}

// ===== PRODUK =====
function renderProducts(category) {
    const container = document.getElementById('product-list');
    const title = document.getElementById('category-title');
    const sub = document.getElementById('category-sub');
    if(!container) return;
    
    const subs = {
        'Croffle': 'Pilihan croffle terbaik untukmu',
        'Dessert Box': 'Dessert box premium dengan berbagai rasa',
        'Minuman': 'Minuman segar pendamping dessert'
    };
    
    title.textContent = category;
    sub.textContent = subs[category] || '';
    container.innerHTML = '';
    
    const filtered = products.filter(p => p.category === category);
    filtered.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = (index * 0.1) + 's';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>Rp ${product.price.toLocaleString('id-ID')}</p>
        `;
        card.onclick = () => showDetail(product.id);
        container.appendChild(card);
    });
}

function filterCategory(category, el) {
    document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
    if(el) el.classList.add('active');
    const section = document.getElementById('product-section');
    section.classList.remove('hidden');
    renderProducts(category);
    setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
}

function closeProducts() {
    document.getElementById('product-section').classList.add('hidden');
    document.querySelectorAll('.cat-item').forEach(item => item.classList.remove('active'));
}

// ===== ULASAN =====
function renderReviews() {
    const container = document.getElementById('review-list');
    if(!container) return;
    container.innerHTML = '';
    
    reviews.forEach((review, index) => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.style.animationDelay = (index * 0.1) + 's';
        let stars = '';
        for(let i = 0; i < 5; i++) stars += i < review.rating ? '★' : '☆';
        const photoHtml = review.photo ? `<div class="review-photo-wrapper"><img src="${review.photo}" class="review-photo"></div>` : '';
        
        card.innerHTML = `
            <div class="review-header">
                <div class="review-avatar" style="background: ${review.color};">${review.initial}</div>
                <div class="review-header-info">
                    <span class="review-name">${review.name}</span>
                    <span class="review-date">${review.date}</span>
                </div>
            </div>
            <div class="review-stars">${stars}</div>
            <p class="review-text">${review.text}</p>
            ${photoHtml}
        `;
        container.appendChild(card);
    });
}

function openReviewModal() {
    document.getElementById('review-modal').classList.add('active');
    document.getElementById('review-name-input').value = '';
    document.getElementById('review-text-input').value = '';
    document.getElementById('photo-preview').innerHTML = '';
    selectedPhoto = null;
    setRating(5);
}

function closeReviewModal() { document.getElementById('review-modal').classList.remove('active'); }

function setRating(rating) {
    selectedRating = rating;
    document.querySelectorAll('#star-rating i').forEach((star, i) => star.classList.toggle('active', i < rating));
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#star-rating i').forEach(star => {
        star.onclick = () => setRating(parseInt(star.dataset.rating));
    });
});

function previewPhoto(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            selectedPhoto = e.target.result;
            document.getElementById('photo-preview').innerHTML = `<img src="${e.target.result}">`;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function submitReview() {
    const name = document.getElementById('review-name-input').value.trim() || "Anonim";
    const text = document.getElementById('review-text-input').value.trim();
    if(!text) { alert('Ulasan tidak boleh kosong!'); return; }
    
    const colors = ["#E91E63", "#3F51B5", "#FF9800", "#4CAF50", "#9C27B0", "#00BCD4"];
    reviews.unshift({
        name, initial: name.charAt(0).toUpperCase(),
        color: colors[Math.floor(Math.random() * colors.length)],
        rating: selectedRating, date: "Baru saja", text, photo: selectedPhoto
    });
    renderReviews();
    closeReviewModal();
    alert('Terima kasih atas ulasanmu! 💕');
}

// ===== DETAIL PRODUK =====
function showDetail(productId) {
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('detail-content');
    detailQty = 1;
    container.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="detail-img-large">
        <h2 class="detail-title">${product.name}</h2>
        <p class="detail-price">Rp ${product.price.toLocaleString('id-ID')}</p>
        <p class="detail-desc">${product.desc}</p>
        <h4 style="margin-bottom:10px; font-size:0.9rem;">Varian</h4>
        <div class="variant-options">
            <button class="variant-btn active">Original</button>
            <button class="variant-btn">Choco</button>
            <button class="variant-btn">Biscoff</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <h4 style="font-size:0.9rem;">Jumlah</h4>
            <div class="qty-selector">
                <button class="qty-btn" onclick="changeQty(-1)">-</button>
                <span class="qty-value" id="detail-qty">1</span>
                <button class="qty-btn" onclick="changeQty(1)">+</button>
            </div>
        </div>
        <button class="btn-primary" style="width:100%; max-width:100%;" onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;
    switchTab('detail');
}

function changeQty(change) {
    detailQty += change;
    if(detailQty < 1) detailQty = 1;
    document.getElementById('detail-qty').innerText = detailQty;
}

// ===== KERANJANG =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);
    if(existing) existing.qty += detailQty;
    else cart.push({ ...product, qty: detailQty });
    detailQty = 1;
    alert(`${product.name} ditambahkan ke keranjang!`);
    goToCart();
}

function renderCart() {
    const container = document.getElementById('cart-content');
    const footer = document.getElementById('cart-footer');
    if(!container) return;
    if(cart.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:#888;margin-top:50px;">Keranjang masih kosong</p>';
        footer.style.display = 'none';
        return;
    }
    footer.style.display = 'flex';
    container.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>Rp ${item.price.toLocaleString('id-ID')}</p>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
        `;
        container.appendChild(div);
    });
    document.getElementById('cart-total').innerText = "Rp " + total.toLocaleString('id-ID');
}

function updateCartQty(index, change) {
    cart[index].qty += change;
    if(cart[index].qty < 1) cart.splice(index, 1);
    renderCart();
}

// ===== INIT =====
window.addEventListener('load', () => {
    if(localStorage.getItem('darkMode') === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
    }
    renderCarousel();
    renderReviews();
    renderHistory('all');
    setRating(5);
    document.getElementById('admin-phone-display').textContent = ADMIN_PHONE_DISPLAY;
    document.getElementById('admin-phone-call').textContent = ADMIN_PHONE_DISPLAY;
    
    setTimeout(() => {
        if(document.getElementById('splash-screen').classList.contains('active')) {
            goToHome();
        }
    }, 5000);
});