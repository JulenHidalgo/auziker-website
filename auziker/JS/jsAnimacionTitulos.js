var cabeEnfoque = document.getElementById("cabeceraEnfoque");

// Opciones para la observación
var opciones = {
    root: null, // Por defecto, el viewport
    rootMargin: '0px', // Margen alrededor del viewport
    threshold: [0, 1] // Observar cuando el elemento está completamente fuera y completamente dentro de la vista
};

//Que salga la animacion cunado se vea el titulo #enfoque
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (entry.isIntersecting) {
            cabeEnfoque.style.animation = "aparecerIzq 2s ease forwards";
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(cabeEnfoque);

var cabeProyectos = document.getElementById("cabeProyectos");
//Que salga la animacion cunado se vea el titulo #proyectos
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (entry.isIntersecting) {
            cabeProyectos.style.opacity = '1';
            cabeProyectos.style.transform = 'scale(1)';
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(cabeProyectos);

var cabeNoticias = document.getElementById("cabeNoticias");
//Que salga la animacion cunado se vea el titulo #proyectos
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (entry.isIntersecting) {
            cabeNoticias.style.opacity = '1';
            cabeNoticias.style.transform = 'scale(1)';
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(cabeNoticias);

var cabeEquipo = document.getElementById("cabeEquipo");
//Que salga la animacion cunado se vea el titulo #proyectos
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (entry.isIntersecting) {
            cabeEquipo.style.opacity = '1';
            cabeEquipo.style.transform = 'scale(1)';
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(cabeEquipo);

var cabeProductos = document.getElementById("cabeceraProductos");
//Que salga la animacion cunado se vea el titulo #proyectos
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        // Si el elemento ya no es visible
        if (entry.isIntersecting) {
            cabeProductos.style.animation = "aparecerIzq 2s ease forwards";
        }
    });
}, opciones);

// Empieza a observar el elemento
observer.observe(cabeProductos);