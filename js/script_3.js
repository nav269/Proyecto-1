

document.getElementById('opinionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const opinion = document.getElementById('opinion').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const photoInput = document.getElementById('photo');
    let photoURL = '';

    // Obtener la fecha actual
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    // Leer la foto seleccionada
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoURL = e.target.result;
            addComment(name, email, opinion, rating, photoURL, date);
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        // Si no se selecciona una foto, usa una foto de avatar genérica
        photoURL = 'https://via.placeholder.com/100';
        addComment(name, email, opinion, rating, photoURL, date);
    }

    // Limpiar el formulario
    document.getElementById('opinionForm').reset();
});

function addComment(name, email, opinion, rating, photoURL, date) {
    // Crear una nueva tarjeta de comentario
    const commentHTML = `
    <link rel="stylesheet" href="fontawesome-free-6.5.1-web/css/brands.min.css">
    <link rel="stylesheet" href="fontawesome-free-6.5.1-web/css/solid.min.css">
    <link rel="stylesheet" href="fontawesome-free-6.5.1-web/css/fontawesome.min.css">
        <div class="card">
            <img src="${photoURL}" class="card-img-top" alt="Foto de ${name}">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                <div class="star-rating" style="font-size: 18px; direction: ltr;">
                    ${'&#9733;'.repeat(rating)}
                    ${'&#9734;'.repeat(5 - rating)}
                </div>
                <p class="card-text">${opinion}</p>
                <div class="vote-section">
                    <span>¿Te resulto util esta reseña?</span>
                    <button class="vote-btn" onclick="vote(this, 'up')">
                        <i class="fas fa-thumbs-up"></i>
                    </button>
                    <span class="vote-count" data-vote="up">0</span>
                    <button class="vote-btn" onclick="vote(this, 'down')">
                        <i class="fas fa-thumbs-down"></i>
                    </button>
                    <span class="vote-count" data-vote="down">0</span>
                </div>
            </div>
        </div>
    `;

    // Agregar la tarjeta al contenedor de comentarios
    document.getElementById('commentsSection').insertAdjacentHTML('beforeend', commentHTML);
}

function vote(button, type) {
    const countSpan = button.nextElementSibling;
    let count = parseInt(countSpan.innerText);
    count++;
    countSpan.innerText = count;
}