var btnEnfoque = document.getElementById("mostrarEnfoque");
var enfoque = document.getElementById("modalEnfoque");
var botonesCerrar = document.querySelectorAll('.cerrar');
var body = document.querySelector("body");
var uso = document.getElementById("imgProductos");
var productos = document.getElementById("modalProductos");

btnEnfoque.onclick = function () {
    window.location.href = "mailto:?to=pruebasemail741%40gmail.com&subject=Quiero%20formar%20parte%20siendo%20trabajador&body=Nombre:%0D%0ATel%C3%A9fono:%0D%0AEmail:%0D%0A%3FPor%20qu%C3%A9%20quieres%20unirte%20a%20nosotros%3F%3A%0D%0A%0D%0AAjunta%20tu%20CV%20debajo:";
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