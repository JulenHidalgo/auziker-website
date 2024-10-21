var btnEnfoque = document.getElementById("mostrarEnfoque");
var enfoque = document.getElementById("modalEnfoque");
var botonesCerrar = document.querySelectorAll('.cerrar');
var body = document.querySelector("body");
var uso = document.getElementById("imgProductos");
var productos = document.getElementById("modalProductos");

btnEnfoque.onclick = function () {
    enfoque.style.display = "block";
    body.style.overflow = "hidden"; // Bloquear scroll del body
    icono.style.display = "none";
}

botonesCerrar.forEach(function (boton) {
    boton.addEventListener('click', function () {
        enfoque.style.display = "none";
        productos.style.display = "none"
        body.style.overflow = "auto";
    });
});

window.onclick = function (event) {
    if (event.target == enfoque) {
        enfoque.style.display = "none";
        body.style.overflow = "auto";
    }else if (event.target == productos){
        productos.style.display = "none";
        body.style.overflow = "auto";
    }
}

uso.addEventListener("click", function (event) {
    productos.style.display = "flex";
    body.style.overflow = "hidden";
});