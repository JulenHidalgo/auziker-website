// Opciones para la observación
var opciones = {
    root: null, // Por defecto, el viewport
    rootMargin: '0px', // Margen alrededor del viewport
    threshold: [0, 1] // Observar cuando el elemento está completamente fuera y completamente dentro de la vista
};

// Crea una instancia de Intersection Observer con la función de callback
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (!entry.isIntersecting) {
            icono.style.display = "flex";
        } else {
            icono.style.display = "none";
            sublista.style.display = "none";
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(nav);