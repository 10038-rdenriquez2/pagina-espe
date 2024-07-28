// ------------------------ BLANCO Y NEGRO ------------------------
document.getElementById('accessBtn').addEventListener('click', function() {
    var menu = document.getElementById('accessMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('toggleBW').addEventListener('click', function() {
    document.body.classList.toggle('black-and-white');
    this.classList.toggle('active');
    document.getElementById('accessBtn').classList.toggle('active');
});

// Opcional: Cerrar el menú si se hace clic fuera de él
window.addEventListener('click', function(event) {
    var menu = document.getElementById('accessMenu');
    if (!event.target.matches('#accessBtn') && !event.target.matches('#accessBtn *')) {
        menu.style.display = 'none';
    }
});

// ------------------------ MODO DARK ------------------------
document.getElementById('toggleDark').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.classList.toggle('active');
});

// ------------------------ AUMENTAR TAMAÑO DEL TEXTO ------------------------
let isTextEnlarged = false;
const originalFontSizes = new Map();

document.getElementById('toggleText').addEventListener('click', function() {
    const textElements = document.querySelectorAll('body *');

    if (isTextEnlarged) {
        textElements.forEach(function(element) {
            if (originalFontSizes.has(element)) {
                element.style.fontSize = originalFontSizes.get(element);
            }
    });
    this.textContent = 'Aumentar Texto';
    originalFontSizes.clear();
    } else {
        textElements.forEach(function(element) {
            if (window.getComputedStyle(element).fontSize !== '0px') {
                if (!originalFontSizes.has(element)) {
                    const currentFontSize = window.getComputedStyle(element).fontSize;
                    originalFontSizes.set(element, currentFontSize);
                }
                const currentFontSize = window.getComputedStyle(element).fontSize;
                const fontSize = parseFloat(currentFontSize);
                element.style.fontSize = (fontSize + 6) + 'px';
            }
        });
        this.textContent = 'Restablecer';
    }
    isTextEnlarged = !isTextEnlarged;
    this.classList.toggle('active');
});











  
