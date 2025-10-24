/*
 * Lógica interactiva para el sitio web.
 * Este archivo contiene funciones que se pueden usar en múltiples páginas.
*/

// Esta función genérica cambia el color del texto de un elemento.
// Recibe dos argumentos: el ID del botón y el ID del texto que se va a cambiar.
function setupColorChanger(buttonId, textId) {
    const colorBtn = document.getElementById(buttonId);
    const targetText = document.getElementById(textId);

    // Si los elementos existen en la página, se les añade el evento.
    if (colorBtn && targetText) {
        colorBtn.addEventListener('click', () => {
            // Array de colores para cambiar el texto.
            const colors = ['#3B82F6', '#22C55E', '#EF4444', '#F59E0B', '#A855F7'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Cambia el color del texto.
            targetText.style.color = randomColor;
        });
    }
}
