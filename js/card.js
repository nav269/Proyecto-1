let cart = JSON.parse(localStorage.getItem('cart')) || [];

function formatCurrency(value) {
    return `Bs. ${value.toFixed(2)}`;
}

function removeFromCart(productNombre) {
    cart = cart.filter(item => item.nombre !== productNombre);
    updateCart();
}

function createRemoveButton(productNombre) {
    const button = document.createElement('button');
    button.textContent = 'Quitar';
    button.onclick = function() {
        removeFromCart(productNombre);
    };
    return button;
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalMontoElement = document.getElementById('totalMonto');
    
    cartItems.innerHTML = '';
    let totalMonto = 0;

    cart.forEach(item => {
        totalMonto += item.totalPrecio;

        const tr = document.createElement('tr');
        
        const tdCantidad = document.createElement('td');
        tdCantidad.textContent = item.cantidad;
        tr.appendChild(tdCantidad);

        const tdNombre = document.createElement('td');
        tdNombre.textContent = item.nombre;
        tr.appendChild(tdNombre);

        const tdPrecio = document.createElement('td');
        tdPrecio.textContent = formatCurrency(item.precio);
        tr.appendChild(tdPrecio);

        const tdTotal = document.createElement('td');
        tdTotal.textContent = formatCurrency(item.totalPrecio);
        tr.appendChild(tdTotal);

        const tdAction = document.createElement('td'); // Create action column
        const removeButton = createRemoveButton(item.nombre);
        tdAction.appendChild(removeButton);
        tr.appendChild(tdAction);

        cartItems.appendChild(tr);
    });
    
    totalMontoElement.textContent = formatCurrency(totalMonto);
}

function checkout() {
    alert('Gracias por su compra!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    window.close();
}

window.onload = updateCart;
