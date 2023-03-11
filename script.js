// Declaración de variables
let edwar;
let melisa;
let mouseIsDown = false;
const imageWidth = 150;
let paintbrush;

// Función que se llama cuando se presiona el mouse
const handleMouseDown = () => {
    mouseIsDown = true;
    let randomNumber = Math.random();
    if (randomNumber < 0.5) {
        paintbrush = melisa;
    } else {
        paintbrush = edwar;
    }
}

// Función que se llama cuando se levanta el mouse
const handleMouseUp = () => {
    mouseIsDown = false;
}

// Función que se llama cuando se mueve el mouse
const handleMouseMove = (event) => {
    // Se obtiene el desplazamiento del scroll y el límite inferior para dibujar
    const scrollAmount = document.scrollingElement.scrollTop;
    const paintbrushHeight = paintbrush.naturalHeight;
    const paintLimit = window.innerHeight - paintbrushHeight;
    // Se obtiene la posición del mouse y se dibuja la imagen del pincel en esa posición
    const left = event.clientX;
    const top = Math.min(paintLimit, event.clientY + scrollAmount);
    context.drawImage(paintbrush, left, top);
}

// Función que se llama cuando se mueve el dedo en una pantalla táctil
const handleTouchMove = (event) => {
    // Se obtiene el desplazamiento del scroll y el límite inferior para dibujar
    const scrollAmount = document.scrollingElement.scrollTop;
    const paintbrushHeight = paintbrush.naturalHeight;
    const paintLimit = window.innerHeight - paintbrushHeight;
    // Se obtiene la posición del dedo y se dibuja la imagen del pincel en esa posición
    const left = event.touches[0].clientX;
    const top = Math.min(paintLimit, event.touches[0].clientY + scrollAmount);
    context.drawImage(paintbrush, left, top);
}

// Se obtiene el elemento canvas y se establece su contexto en 2D
const canvas = document.querySelector('#drawingCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Se cargan las imágenes de los pinceles
edwar = document.createElement('img');
edwar.src = 'images/edware.png';
melisa = document.createElement('img');
melisa.src = 'images/melisam.png';

// Se agregan los event listeners para el mouse y la pantalla táctil
canvas.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

canvas.addEventListener('touchmove', handleTouchMove);
window.addEventListener('touchstart', handleMouseDown);
window.addEventListener('touchend', handleMouseUp);
