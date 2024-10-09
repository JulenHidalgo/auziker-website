var botones = document.getElementById("botones");
var btnEstudiante = document.getElementById("estudiante");
var txtEstudiante = document.getElementById("formEstudiante");
var footer = document.getElementById("footer");
var tituloELeccion = document.getElementById("tituloELeccion");

btnEstudiante.onclick = function (){
    txtEstudiante.style.display = "flex";
    botones.classList.remove("botones");
    botones.classList.add("oculto");
    footer.style.position = "relative"
    tituloELeccion.classList.add("oculto");
}

var btnTrabajador = document.getElementById("trabajador");
var txtTrabajador = document.getElementById("formTrabajador");

btnTrabajador.onclick = function (){
    txtTrabajador.style.display = "flex";
    botones.classList.remove("botones");
    botones.classList.add("oculto");
    footer.style.position = "relative"
    tituloELeccion.classList.add("oculto");
}