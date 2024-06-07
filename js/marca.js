function actualizarOpcionesMarca() {
    var marcaSeleccionada = document.querySelector('input[name="marca"]:checked').value;
    var opciones = document.querySelectorAll('.tar'); 


    opciones.forEach(function(tar) {
        tar.style.display = 'none';
    });

    if (marcaSeleccionada !== 'todos') {
        var opcionesMarca = document.querySelectorAll('.' + marcaSeleccionada);
        opcionesMarca.forEach(function(tar) {
            tar.style.display = 'block'; 
        });
    } else {
        opciones.forEach(function(tar) {
            tar.style.display = 'block'; 
        });
    }
}


document.querySelectorAll('input[name="marca"]').forEach(function(radio) {
    radio.addEventListener("change", actualizarOpcionesMarca);
});

document.querySelector('input[name="marca"][value="todos"]').checked = true;
actualizarOpcionesMarca(); 
