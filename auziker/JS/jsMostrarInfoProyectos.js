var otso = document.getElementById("mostrarOtso");
var txtOtso = document.getElementById("txtOtso");
var imgOtso = document.getElementById("imgOtso");

otso.addEventListener('click', function () {
    txtOtso.classList.remove("ocultoProyecto");
    imgOtso.style.display = "none";
    otso.style.display = "none";
});

var hilotz = document.getElementById("mostrarHilotz");
var txtHilotz = document.getElementById("txtHilotz");
var imgHilotz = document.getElementById("imgHilotz");

hilotz.addEventListener('click', function () {
    txtHilotz.classList.remove("ocultoProyecto");
    imgHilotz.style.display = "none";
    hilotz.style.display = "none";
});

var zonbi = document.getElementById("mostrarZonbi");
var txtZonbi = document.getElementById("txtZonbi");
var imgZonbi = document.getElementById("imgZonbi");

zonbi.addEventListener('click', function () {
    txtZonbi.classList.remove("ocultoProyecto");
    imgZonbi.style.display = "none";
    zonbi.style.display = "none";
});

var covid = document.getElementById("mostrarCovid");
var txtCovid = document.getElementById("txtCovid");
var imgCovid = document.getElementById("imgCovid");

covid.addEventListener('click', function () {
    txtCovid.classList.remove("ocultoProyecto");
    imgCovid.style.display = "none";
    covid.style.display = "none";
});