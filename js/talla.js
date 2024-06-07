document.addEventListener("DOMContentLoaded", function() {
    var tallaRadios = document.querySelectorAll('input[name="talla"]');
    var cards = document.querySelectorAll('.tar');

    function actualizarVisibilidad() {
        var tallaSeleccionada = document.querySelector('input[name="talla"]:checked').value;

        cards.forEach(function(card) {
            var tieneTalla = card.classList.contains(tallaSeleccionada);

            if (tallaSeleccionada === 'todas' || tieneTalla) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    tallaRadios.forEach(function(radio) {
        radio.addEventListener('change', actualizarVisibilidad);
    });
});
