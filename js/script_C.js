let cart = [];

function addToCart(productNombre, productPrecio) {
    const existingProductIndex = cart.findIndex(item => item.nombre === productNombre);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].cantidad += 1;
        cart[existingProductIndex].totalPrecio += productPrecio;
    } else {
        cart.push({ nombre: productNombre, precio: productPrecio, cantidad: 1, totalPrecio: productPrecio });
    }
    updateCart();
    openCartWindow();
}

function formatCurrency(value) {
    return `Bs. ${value.toFixed(2)}`;
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function openCartWindow() {
    window.open('../html/Carrito_de_compras.html', 'Cart', 'width=700,height=400');
}
