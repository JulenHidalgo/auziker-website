var icono = document.getElementById("desplegable");
var sublista = document.getElementById("sublista");

icono.addEventListener("mouseenter", function (event) {
    sublista.style.display = "flex";
});

icono.addEventListener("mouseleave", function (event) {
    sublista.style.display = "none";
});

sublista.addEventListener("mouseenter", function (event) {
    sublista.style.display = "flex";
});

sublista.addEventListener("mouseleave", function (event) {
    sublista.style.display = "none";
});