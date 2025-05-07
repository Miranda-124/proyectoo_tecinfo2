let index = 0;
const images = document.querySelectorAll(".imagen-container img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

// Función para mostrar la imagen según el índice
function showImage() {
    const totalImages = images.length;
    if (index >= totalImages) {
        index = 0;
    } else if (index < 0) {
        index = totalImages - 1;
    }
    // Desplazamiento de las imágenes
    document.querySelector(".imagen-container").style.transform = `translateX(-${index * 100}%)`;
}

// Evento para el botón "Siguiente"
nextButton.addEventListener("click", () => {
    index++;
    showImage();
});

// Evento para el botón "Anterior"
prevButton.addEventListener("click", () => {
    index--;
    showImage();
});

// Mostrar la primera imagen al cargar
showImage();
