var main = document.getElementById("main");
var footer = document.getElementById("footer");

var alturaElemento = main.offsetHeight;

var alturaVentana = window.innerHeight;

if (alturaElemento > alturaVentana) {
    footer.style.position = "relative";
} else {
    footer.style.position = "absolute";
}