document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    
    // Function to fetch products from JSON
    async function fetchProducts() {
        try {
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const products = await response.json();
            renderProducts(products);
        } catch (error) {
            console.error('Failed to fetch products:', error);
            productGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">상품을 불러오는데 실패했습니다.</p>';
        }
    }

    // Function to render products
    function renderProducts(products) {
        productGrid.innerHTML = ''; // Clear loading state or empty grid
        
        products.forEach(product => {
            // Create anchor element wrapping the card
            const cardLink = document.createElement('a');
            cardLink.href = product.coupangLink;
            cardLink.target = "_blank"; // Open in new tab
            cardLink.rel = "noopener noreferrer";
            cardLink.className = "product-card";
            
            // Build card inner HTML
            let badgeHtml = '';
            if (product.badge && product.badge.trim() !== '') {
                badgeHtml = `<div class="badge">${product.badge}</div>`;
            }
            
            cardLink.innerHTML = `
                <div class="image-container">
                    ${badgeHtml}
                    <img src="${product.imageUrl}" alt="${product.title}" class="product-image" loading="lazy">
                </div>
                <div class="product-info">
                    <h2 class="product-title">${product.title}</h2>
                    <div class="buy-btn-text">보러가기</div>
                </div>
            `;
            
            productGrid.appendChild(cardLink);
        });
    }

    // Simulate network delay for effect, then load products
    setTimeout(fetchProducts, 800);
});
