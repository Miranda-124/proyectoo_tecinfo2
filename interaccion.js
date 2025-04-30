const imagenes = document.querySelectorAll('.galeria img');

imagenes.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 4px 12px rgba(0, 0, 255, 0.4)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});
