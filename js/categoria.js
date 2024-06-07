document.addEventListener("DOMContentLoaded", function() {
    var accesorioS = document.querySelectorAll('input[name="categoria"]');
    var cards = document.querySelectorAll('.tar');

    function actualizarVisibilidad() {
        var accesorioSeleccionado = document.querySelector('input[name="categoria"]:checked').value;

        cards.forEach(function(card) {
            var tieneAcc = card.classList.contains(accesorioSeleccionado);

            if (accesorioSeleccionado === 'todas' || tieneAcc) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    accesorioS.forEach(function(radio) {
        radio.addEventListener('change', actualizarVisibilidad);
    });
});