// --- KONFIGURASI ADMIN ---
const ADMIN_PHONE = "6283138638544";
const ADMIN_PHONE_DISPLAY = "083138638544";
const ADMIN_USER = "sweet";
const ADMIN_PASS = "sweet123";

// --- BRAND TOKO (GANTI DI SINI KALAU MAU GANTI NAMA) ---
const STORE_NAME = "Sweet Crumbs";
const STORE_TAGLINE = "Sweet Moments, In Every Bite";

// --- DATA PRODUK (6 per kategori, sesuai gambar) ---
let products = [
    // ============ CROFFLE (6 produk) ============
    { 
        id: 1, name: "Croffle Original", price: 15000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Croffle klasik dengan tekstur renyah di luar, lembut di dalam. Dibuat dari adonan croissant premium yang dipanggang sempurna, lalu ditaburi gula halus dan butter wangi. Rasa original yang bikin kamu ingat rasa rumahan.", 
        hint: "Croffle hangat selalu jadi pilihan terbaik~"
    },
    { 
        id: 2, name: "Croffle Choco", price: 17000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Croffle dengan lelehan cokelat premium Belgia yang kaya rasa. Setiap gigitan menghadirkan sensasi manis yang meleleh di mulut. Topping cokelat melimpah, cocok untuk pecinta cokelat sejati.", 
        hint: "Manisnya cokelat bikin hari makin ceria 🍫"
    },
    { 
        id: 3, name: "Croffle Biscoff", price: 20000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Perpaduan croffle renyah dengan saus Lotus Biscoff yang legit dan crumble biscuit di atasnya. Rasa karamel-spiced yang khas bikin setiap gigitan terasa spesial. Best seller sepanjang masa!", 
        hint: "Legitnya Biscoff bikin susah move on ✨"
    },
    { 
        id: 4, name: "Croffle Strawberry", price: 18000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Croffle dengan topping stroberi segar pilihan dan whipped cream lembut. Kombinasi manis-asam yang menyegarkan, cocok untuk kamu yang suka dessert fruity.", 
        hint: "Stroberi segar bikin makin manis 🍓"
    },
    { 
        id: 5, name: "Croffle Matcha", price: 19000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Croffle dengan saus matcha premium dari Uji, Jepang. Rasa earthy dan sedikit pahit yang berpadu dengan manisnya croffle, menciptakan harmoni rasa yang elegan.", 
        hint: "Matcha premium, rasa autentik Jepang 🍵"
    },
    { 
        id: 6, name: "Croffle Cheese", price: 19000, category: "Croffle", 
        img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Croffle dengan saus keju creamy yang gurih dan manis. Topping keju melimpah dengan taburan gula halus. Sensasi unik gurih-manis yang bikin ketagihan.", 
        hint: "Gurih manis, kombinasi sempurna 🧀"
    },
    
    // ============ DESSERT BOX (6 produk) ============
    { 
        id: 7, name: "Tiramisu Dessert Box", price: 25000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box premium dengan lapisan mascarpone lembut, kopi espresso, dan bubuk kakao. Dibuat dengan resep autentik Italia, menghadirkan rasa mewah dalam setiap sendokan.", 
        hint: "Mewah dan lembut, dessert kelas restoran ✨"
    },
    { 
        id: 8, name: "Oreo Dessert Box", price: 22000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box dengan crumble oreo renyah, whipped cream lembut, dan lelehan cokelat. Setiap layer memberikan tekstur berbeda yang bikin kamu terus ingin menikmatinya.", 
        hint: "Crumble oreo bikin tiap sendok seru 🍪"
    },
    { 
        id: 9, name: "Matcha Dessert Box", price: 23000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box dengan lapisan matcha premium yang creamy dan lembut. Rasa earthy matcha berpadu sempurna dengan manisnya cream. Cocok untuk pencinta matcha.", 
        hint: "Sensasi matcha Jepang yang otentik 🍵"
    },
    { 
        id: 10, name: "Red Velvet Dessert Box", price: 24000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box dengan lapisan red velvet lembut dan cream cheese frosting yang gurih-manis. Warna merahnya cantik, rasanya elegan. Pilihan tepat untuk momen spesial.", 
        hint: "Cantik, lembut, dan romantis 💕"
    },
    { 
        id: 11, name: "Chocolate Dessert Box", price: 23000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box dengan lapisan cokelat premium dan ganache mewah. Setiap sendokan menghadirkan sensasi cokelat yang intense dan meleleh di mulut.", 
        hint: "Surga cokelat dalam satu kotak 🍫"
    },
    { 
        id: 12, name: "Fruit Dessert Box", price: 26000, category: "Dessert Box", 
        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Dessert box dengan aneka buah segar pilihan seperti stroberi, kiwi, anggur, dan blueberry di atas whipped cream lembut. Segar, sehat, dan tetap manis.", 
        hint: "Segar dengan buah asli pilihan 🍓🥝"
    },
    
    // ============ MINUMAN (6 produk) ============
    { 
        id: 13, name: "Iced Strawberry Latte", price: 18000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Minuman segar dengan susu segar, saus stroberi asli, dan es batu. Rasa manis-asam yang menyegarkan, cocok diminum saat cuaca panas. Warnanya cantik pink, instagramable banget!", 
        hint: "Segar dan cantik, pas buat cuaca panas 🍓"
    },
    { 
        id: 14, name: "Matcha Latte", price: 16000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Matcha latte creamy dengan matcha grade premium dari Jepang dan susu segar. Rasa earthy matcha berpadu sempurna dengan manisnya susu.", 
        hint: "Creamy matcha bikin hari makin tenang 🍵"
    },
    { 
        id: 15, name: "Brown Sugar Milk", price: 17000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1558857563-b371033873b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Minuman dengan brown sugar premium, susu segar, dan boba kenyal. Rasa karamel manis dari brown sugar berpadu dengan lembutnya susu.", 
        hint: "Manisnya brown sugar + boba kenyal 🧋"
    },
    { 
        id: 16, name: "Chocolate Milk", price: 15000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Cokelat susu klasik dengan cokelat premium dan susu segar. Rasa cokelat yang kaya dan creamy, disukai semua kalangan.", 
        hint: "Klasik dan menenangkan, selalu pas 🍫"
    },
    { 
        id: 17, name: "Iced Coffee Latte", price: 17000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Espresso shot premium dengan susu segar dan es batu. Rasa kopi yang kuat berpadu dengan creamy-nya susu. Cocok untuk boost energi di siang hari.", 
        hint: "Kopi creamy, teman setia produktif ☕"
    },
    { 
        id: 18, name: "Thai Tea", price: 16000, category: "Minuman", 
        img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", 
        desc: "Thai tea autentik dengan campuran teh hitam Thailand, susu kental manis, dan es batu. Rasa manis, creamy, dengan aroma rempah khas Thailand.", 
        hint: "Autentik Thailand, manis dan creamy 🧡"
    }
];

// --- BEST SELLER (ID produk yang jadi best seller) ---
let bestSellerIds = [3, 7, 13];

// --- DATA ULASAN ---
let reviews = [
    { name: "Sarah Amelia", initial: "S", color: "#E91E63", rating: 5, date: "2 hari lalu", text: "Croffle-nya renyah banget! Topping cokelatnya melimpah, bikin nagih. Pasti repeat order! 🥰", photo: "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Budi Santoso", initial: "B", color: "#3F51B5", rating: 5, date: "5 hari lalu", text: "Dessert box Tiramisu-nya juara! Rasanya pas, nggak terlalu manis.", photo: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Maya Putri", initial: "M", color: "#FF9800", rating: 4, date: "1 minggu lalu", text: "Iced Strawberry Latte-nya segar! Pengiriman cepat, packing rapi. 👍", photo: null },
    { name: "Andi Wijaya", initial: "A", color: "#4CAF50", rating: 5, date: "2 minggu lalu", text: "Sudah langganan dari awal buka. Kualitas konsisten!", photo: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { name: "Rina Lestari", initial: "R", color: "#9C27B0", rating: 5, date: "3 minggu lalu", text: "Pesen buat acara keluarga, semua pada suka! ✨", photo: null }
];

// --- DATA PESANAN (RIWAYAT) - KOSONG AWALNYA ---
let orders = [];

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
let currentStrukOrder = null;

// ==========================================
// NAVIGASI
// ==========================================
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

function goToHome() { switchTab('home'); renderCarousel(); renderReviews(); }
function goToCart(el) { switchTab('cart', el); renderCart(); }

// ==========================================
// ADMIN
// ==========================================
function goToAdmin(el) {
    if(el) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        el.classList.add('active');
    }
    if(isAdminLoggedIn) { switchTab('admin'); renderAdminStats(); }
    else switchTab('admin-login');
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
    } else alert('❌ Username atau password salah!\n\nHint: sweet / sweet123');
}

function logoutAdmin() {
    if(confirm('Yakin ingin logout?')) { isAdminLoggedIn = false; switchTab('home'); }
}

// ✅ REAL-TIME STATS
function renderAdminStats() {
    document.getElementById('stat-products').textContent = products.length;
    document.getElementById('stat-orders').textContent = orders.length;
    
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    document.getElementById('stat-revenue').textContent = "Rp " + totalRevenue.toLocaleString('id-ID');
    
    const uniqueCustomers = new Set(orders.map(o => o.buyerName || o.id)).size;
    document.getElementById('stat-customers').textContent = uniqueCustomers;
    
    const reportTotal = document.getElementById('report-total');
    if(reportTotal) reportTotal.textContent = "Rp " + totalRevenue.toLocaleString('id-ID');
}

function openAdminPanel(panel) {
    if(panel === 'menu') { renderAdminProducts(); switchTab('panel-menu'); }
    else if(panel === 'ads') { renderAdminAds(); switchTab('panel-ads'); }
    else if(panel === 'payment') switchTab('panel-payment');
    else if(panel === 'store') switchTab('panel-store');
    else if(panel === 'reports') { renderAdminStats(); switchTab('panel-reports'); }
}

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
    if(confirm('Hapus produk ini?')) {
        products = products.filter(p => p.id !== id);
        renderAdminProducts(); renderAdminStats();
        alert('✅ Produk dihapus!');
    }
}

function editProduct(id) {
    const p = products.find(x => x.id === id);
    const newName = prompt('Nama produk:', p.name); if(newName === null) return;
    const newPrice = prompt('Harga:', p.price); if(newPrice === null) return;
    p.name = newName; p.price = parseInt(newPrice) || p.price;
    renderAdminProducts(); alert('✅ Produk diupdate!');
}

function openAddProductModal() { document.getElementById('product-modal').classList.add('active'); }
function closeAddProductModal() { document.getElementById('product-modal').classList.remove('active'); }

function addNewProduct() {
    const name = document.getElementById('new-prod-name').value.trim();
    const price = parseInt(document.getElementById('new-prod-price').value);
    const category = document.getElementById('new-prod-category').value;
    const img = document.getElementById('new-prod-img').value.trim() || "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
    if(!name || !price) { alert('Nama & harga harus diisi!'); return; }
    const newId = Math.max(...products.map(p => p.id)) + 1;
    products.push({ id: newId, name, price, category, img, desc: "Produk baru dari Sweet Crumbs", hint: "Yuk coba produk baru ini~" });
    renderAdminProducts(); renderAdminStats(); closeAddProductModal();
    alert('✅ Produk ditambahkan!');
}

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
    if(bestSellerIds.includes(id)) bestSellerIds = bestSellerIds.filter(x => x !== id);
    else {
        if(bestSellerIds.length >= 3) { alert('⚠️ Maksimal 3!'); return; }
        bestSellerIds.push(id);
    }
    renderAdminAds(); renderCarousel();
}

// ==========================================
// CHECKOUT
// ==========================================
function selectDelivery(type, el) {
    currentDelivery = type;
    document.querySelectorAll('.delivery-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    
    document.getElementById('store-info').classList.toggle('hidden', type !== 'PickUp');
    document.getElementById('address-fields').classList.toggle('hidden', type === 'PickUp');
    
    updateCheckoutTotal();
}

function selectPayment(type, el) {
    currentPayment = type;
    document.querySelectorAll('.payment-card').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('payment-info-cash').classList.toggle('hidden', type !== 'Cash');
    document.getElementById('payment-info-transfer').classList.toggle('hidden', type !== 'Transfer');
    document.getElementById('payment-info-qris').classList.toggle('hidden', type !== 'QRIS');
}

function copyText(text, btn) {
    navigator.clipboard.writeText(text);
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
    setTimeout(() => btn.innerHTML = original, 1500);
}

function previewTransferProof(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('transfer-preview').innerHTML = `<img src="${e.target.result}">`;
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function previewQrisProof(input) {
    if(input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('qris-preview').innerHTML = `<img src="${e.target.result}">`;
        };
        reader.readAsDataURL(input.files[0]);
    }
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

function goToCheckout() {
    if(cart.length === 0) { alert("Keranjang masih kosong!"); return; }
    switchTab('checkout');
    selectDelivery('Delivery', document.querySelectorAll('.delivery-card')[0]);
    selectPayment('Cash', document.querySelectorAll('.payment-card')[0]);
    updateCheckoutTotal();
}

// ==========================================
// CREATE ORDER (REAL-TIME)
// ==========================================
function createOrder() {
    const buyerName = document.getElementById('buyer-name').value.trim() || "Anonim";
    const buyerWA = document.getElementById('buyer-wa').value.trim() || "-";
    const kecamatan = document.getElementById('kecamatan-select').value || "-";
    
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    let shipping = (currentDelivery === 'PickUp') ? 0 : 8000;
    let total = subtotal + shipping;
    
    const items = cart.map(item => ({
        name: `${item.qty}x ${item.name}`,
        variant: "",
        price: item.price * item.qty
    }));
    
    const now = new Date();
    const dateStr = now.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' + now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    
    const newOrder = {
        id: "#SC" + Math.floor(Math.random() * 90000000 + 10000000),
        date: dateStr,
        buyerName: buyerName,
        buyerWA: buyerWA,
        method: currentDelivery,
        kecamatan: currentDelivery === 'PickUp' ? '-' : kecamatan,
        subtotal: subtotal,
        shipping: shipping,
        total: total,
        status: "diproses",
        payment: currentPayment === 'Cash' ? 'Cash / COD' : currentPayment,
        items: items
    };
    
    orders.unshift(newOrder);
    cart = [];
    
    // ✅ Tampilkan struk langsung
    showStruk(newOrder.id);
    
    // ✅ Update admin stats real-time
    renderAdminStats();
    
    // ✅ Update riwayat real-time
    renderHistory('all');
    
    alert("✅ Pesanan berhasil dibuat!\n\nStatus: Sedang Diproses");
}

// ==========================================
// RIWAYAT (STRUK CARD) - REAL-TIME
// ==========================================
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
        div.className = 'history-struk';
        div.onclick = () => showStruk(o.id);
        div.innerHTML = `
            <div class="history-struk-header">
                <div class="history-struk-brand">${STORE_NAME}</div>
                <div class="history-struk-date">${o.date}</div>
            </div>
            <div class="history-struk-info">
                <span>No. Pesanan</span>
                <strong>${o.id}</strong>
            </div>
            <div class="history-struk-info">
                <span>Atas Nama</span>
                <strong>${o.buyerName || '-'}</strong>
            </div>
            <div class="history-struk-info">
                <span>Metode</span>
                <strong>${o.method}</strong>
            </div>
            <div class="history-struk-footer">
                <span class="struk-status-badge ${o.status}">${o.status.toUpperCase()}</span>
                <span class="history-struk-total">Rp ${o.total.toLocaleString('id-ID')}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

// ==========================================
// STRUK DETAIL (BRAND = SWEET CRUMBS)
// ==========================================
function showStruk(orderId) {
    const order = orders.find(o => o.id === orderId);
    if(!order) return;
    currentStrukOrder = order;
    
    const itemsHtml = order.items.map(item => `
        <div class="struk-item">
            <span class="struk-item-name">${item.name}${item.variant ? '<br><small style="color:#E91E63;font-size:0.7rem;">🌶️ ' + item.variant + '</small>' : ''}</span>
            <span class="struk-item-price">Rp ${item.price.toLocaleString('id-ID')}</span>
        </div>
    `).join('');
    
    document.getElementById('struk-paper').innerHTML = `
        <div class="struk-brand">${STORE_NAME}</div>
        <div class="struk-brand-sub">Struk Pembelian</div>
        <div class="struk-divider"></div>
        <div class="struk-row"><span>No. Pesanan</span><span>${order.id}</span></div>
        <div class="struk-row"><span>Tanggal</span><span>${order.date}</span></div>
        <div class="struk-row"><span>Atas Nama</span><span>${order.buyerName}</span></div>
        <div class="struk-row"><span>Metode</span><span>${order.method}</span></div>
        <div class="struk-row"><span>Kecamatan</span><span>${order.kecamatan || '-'}</span></div>
        <div class="struk-divider"></div>
        <div class="struk-items-title">Detail Pesanan</div>
        ${itemsHtml}
        <div class="struk-divider"></div>
        <div class="struk-row"><span>Subtotal</span><span>Rp ${order.subtotal.toLocaleString('id-ID')}</span></div>
        <div class="struk-row"><span>Ongkos Kirim</span><span>Rp ${order.shipping.toLocaleString('id-ID')}</span></div>
        <div class="struk-total-row">
            <span>Total</span>
            <span>Rp ${order.total.toLocaleString('id-ID')}</span>
        </div>
        <div class="struk-row" style="margin-top:8px;"><span>Pembayaran</span><span>${order.payment}</span></div>
        <div class="struk-divider"></div>
        <div class="struk-stamp">PESANAN DITERIMA</div>
        <div class="struk-thanks">Simpan struk ini sebagai bukti pemesanan</div>
        <div class="struk-thanks">Terima kasih sudah memesan di ${STORE_NAME} 💕🎉</div>
    `;
    
    switchTab('struk');
}

function printStruk() {
    if(!currentStrukOrder) return;
    const strukHTML = document.getElementById('struk-paper').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Struk-${currentStrukOrder.id}</title>
            <style>
                body { font-family: 'Courier New', monospace; padding: 20px; background: white; }
                .struk-brand { font-family: Georgia, serif; font-size: 1.8rem; color: #A21C2C; text-align: center; font-weight: 700; font-style: italic; margin-bottom: 5px; }
                .struk-brand-sub { text-align: center; font-size: 0.75rem; color: #999; margin-bottom: 15px; }
                .struk-divider { border-top: 1px dashed #999; margin: 12px 0; }
                .struk-row, .struk-item { display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 5px; }
                .struk-items-title { font-weight: 700; margin-bottom: 8px; }
                .struk-total-row { display: flex; justify-content: space-between; font-weight: 700; color: #A21C2C; font-size: 1rem; border-top: 2px dashed #999; padding-top: 8px; margin-top: 8px; }
                .struk-stamp { text-align: center; border: 2px solid #2E7D32; color: #2E7D32; padding: 8px; margin: 20px 0; font-weight: 700; letter-spacing: 2px; }
                .struk-thanks { text-align: center; font-size: 0.75rem; color: #666; margin-top: 8px; font-style: italic; }
                .struk-paper { max-width: 380px; margin: 0 auto; background: white; padding: 25px; }
            </style>
        </head>
        <body>
            <div class="struk-paper">${strukHTML}</div>
            <script>window.onload = () => { window.print(); setTimeout(() => window.close(), 500); }<\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
}

function newOrderFromStruk() {
    switchTab('home');
    renderCarousel();
}

// ==========================================
// DROPDOWN
// ==========================================
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

function goToAbout() { document.getElementById('dropdown-menu').classList.remove('active'); switchTab('about'); }
function goToHelp() { document.getElementById('dropdown-menu').classList.remove('active'); switchTab('help'); }

function chatAdmin() {
    const pesan = encodeURIComponent(`Halo Admin ${STORE_NAME}! 👋\n\nSaya ingin bertanya tentang produk Anda.`);
    window.open(`https://wa.me/${ADMIN_PHONE}?text=${pesan}`, '_blank');
}
function callAdmin() { window.location.href = `tel:+${ADMIN_PHONE}`; }
function toggleFaq(el) { el.classList.toggle('open'); }

// ==========================================
// CAROUSEL
// ==========================================
function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    if(!track) return;
    track.innerHTML = ''; dotsContainer.innerHTML = '';
    const bsProducts = bestSellerIds.map(id => products.find(p => p.id === id)).filter(Boolean);
    const badges = ["BEST SELLER", "TOP RATED", "NEW FAVORITE"];
    bsProducts.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'carousel-card';
        card.innerHTML = `
            <div class="carousel-card-info">
                <span class="carousel-badge">${badges[index] || 'BEST SELLER'}</span>
                <h3>${item.name}</h3>
                <p>${item.desc.substring(0, 80)}...</p>
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

// ==========================================
// PRODUK
// ==========================================
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
    products.filter(p => p.category === category).forEach((product, index) => {
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

// ==========================================
// ULASAN
// ==========================================
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
    renderReviews(); closeReviewModal();
    alert('Terima kasih atas ulasanmu! 💕');
}

// ==========================================
// DETAIL PRODUK
// ==========================================
function showDetail(productId) {
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('detail-content');
    detailQty = 1;
    container.innerHTML = `
        <img src="${product.img}" alt="${product.name}" class="detail-img-large">
        <h2 class="detail-title">${product.name}</h2>
        <p class="detail-price">Rp ${product.price.toLocaleString('id-ID')}</p>
        <div class="detail-desc-box"><p class="detail-desc">${product.desc}</p></div>
        <div class="sweet-hint"><i class="fas fa-heart"></i><span>${product.hint}</span></div>
        <div class="qty-row">
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

// ==========================================
// KERANJANG
// ==========================================
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

// ==========================================
// INIT
// ==========================================
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