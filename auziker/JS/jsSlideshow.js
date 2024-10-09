let slideIndexProyecto = 1;
showSlidesProyecto(slideIndexProyecto);

// Next/previous controls
function plusSlidesProyecto(n) {
  showSlidesProyecto(slideIndexProyecto += n);
}

// Thumbnail image controls
function currentSlideProyecto(n) {
  showSlidesProyecto(slideIndexProyecto = n);
}

function showSlidesProyecto(n) {
  let i;
  let slidesProyecto = document.getElementsByClassName("slidesProyecto");
  let dotsProyecto = document.getElementsByClassName("dotProyecto");
  if (n > slidesProyecto.length) { slideIndexProyecto = 1 }
  if (n < 1) { slideIndexProyecto = slidesProyecto.length }
  for (i = 0; i < slidesProyecto.length; i++) {
    slidesProyecto[i].style.display = "none";
  }
  for (i = 0; i < dotsProyecto.length; i++) {
    dotsProyecto[i].className = dotsProyecto[i].className.replace(" active", "");
  }
  slidesProyecto[slideIndexProyecto - 1].style.display = "flex";
  dotsProyecto[slideIndexProyecto - 1].className += " active";
}

//APARTADO NOTICIAS

//PREMIOS
let slideIndexNoticiaPremio = 1;
showSlidesNoticiaPremio(slideIndexNoticiaPremio);

// Next/previous controls
function plusSlidesNoticiaPremio(n) {
  showSlidesNoticiaPremio(slideIndexNoticiaPremio += n);
}

// Thumbnail image controls
function currentSlideNoticiaPremio(n) {
  showSlidesNoticiaPremio(slideIndexNoticiaPremio = n);
}

function showSlidesNoticiaPremio(n) {
  let i;
  let slidesNoticiaPremio = document.getElementsByClassName("slidesNoticiaPremio");
  let dotsNoticiaPremio = document.getElementsByClassName("dotNoticiaPremio");
  if (n > slidesNoticiaPremio.length) { slideIndexNoticiaPremio = 1 }
  if (n < 1) { slideIndexNoticiaPremio = slidesNoticiaPremio.length }
  for (i = 0; i < slidesNoticiaPremio.length; i++) {
    slidesNoticiaPremio[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaPremio.length; i++) {
    dotsNoticiaPremio[i].className = dotsNoticiaPremio[i].className.replace(" active", "");
  }
  slidesNoticiaPremio[slideIndexNoticiaPremio - 1].style.display = "flex";
  dotsNoticiaPremio[slideIndexNoticiaPremio - 1].className += " active";
}

//ENTREVISTAS
let slideIndexNoticiaEntrevistas = 1;
showSlidesNoticiaEntrevistas(slideIndexNoticiaEntrevistas);

// Next/previous controls
function plusSlidesNoticiaEntrevistas(n) {
  showSlidesNoticiaEntrevistas(slideIndexNoticiaEntrevistas += n);
}

// Thumbnail image controls
function currentSlideNoticiaEntrevistas(n) {
  showSlidesNoticiaEntrevistas(slideIndexNoticiaEntrevistas = n);
}

function showSlidesNoticiaEntrevistas(n) {
  let i;
  let slidesNoticiaEntrevistas = document.getElementsByClassName("slidesNoticiaEntrevistas");
  let dotsNoticiaEntrevistas = document.getElementsByClassName("dotNoticiaEntrevistas");
  if (n > slidesNoticiaEntrevistas.length) { slideIndexNoticiaEntrevistas = 1 }
  if (n < 1) { slideIndexNoticiaEntrevistas = slidesNoticiaEntrevistas.length }
  for (i = 0; i < slidesNoticiaEntrevistas.length; i++) {
    slidesNoticiaEntrevistas[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaEntrevistas.length; i++) {
    dotsNoticiaEntrevistas[i].className = dotsNoticiaEntrevistas[i].className.replace(" active", "");
  }
  slidesNoticiaEntrevistas[slideIndexNoticiaEntrevistas - 1].style.display = "flex";
  dotsNoticiaEntrevistas[slideIndexNoticiaEntrevistas - 1].className += " active";
}

//CHARLAS
let slideIndexNoticiaCharlas = 1;
showSlidesNoticiaCharlas(slideIndexNoticiaCharlas);

// Next/previous controls
function plusSlidesNoticiaCharlas(n) {
  showSlidesNoticiaCharlas(slideIndexNoticiaCharlas += n);
}

// Thumbnail image controls
function currentSlideNoticiaCharlas(n) {
  showSlidesNoticiaCharlas(slideIndexNoticiaCharlas = n);
}

function showSlidesNoticiaCharlas(n) {
  let i;
  let slidesNoticiaCharlas = document.getElementsByClassName("slidesNoticiaCharlas");
  let dotsNoticiaCharlas = document.getElementsByClassName("dotNoticiaCharlas");
  if (n > slidesNoticiaCharlas.length) { slideIndexNoticiaCharlas = 1 }
  if (n < 1) { slideIndexNoticiaCharlas = slidesNoticiaCharlas.length }
  for (i = 0; i < slidesNoticiaCharlas.length; i++) {
    slidesNoticiaCharlas[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaCharlas.length; i++) {
    dotsNoticiaCharlas[i].className = dotsNoticiaCharlas[i].className.replace(" active", "");
  }
  slidesNoticiaCharlas[slideIndexNoticiaCharlas - 1].style.display = "flex";
  dotsNoticiaCharlas[slideIndexNoticiaCharlas - 1].className += " active";
}

//EMPRENDIMIENTO 
let slideIndexNoticiaEmprendimiento = 1;
showSlidesNoticiaEmprendimiento(slideIndexNoticiaEmprendimiento);

// Next/previous controls
function plusSlidesNoticiaEmprendimiento(n) {
  showSlidesNoticiaEmprendimiento(slideIndexNoticiaEmprendimiento += n);
}

// Thumbnail image controls
function currentSlideNoticiaEmprendimiento(n) {
  showSlidesNoticiaEmprendimiento(slideIndexNoticiaEmprendimiento = n);
}

function showSlidesNoticiaEmprendimiento(n) {
  let i;
  let slidesNoticiaEmprendimiento = document.getElementsByClassName("slidesNoticiaEmprendimiento");
  let dotsNoticiaEmprendimiento = document.getElementsByClassName("dotNoticiaEmprendimiento");
  if (n > slidesNoticiaEmprendimiento.length) { slideIndexNoticiaEmprendimiento = 1 }
  if (n < 1) { slideIndexNoticiaEmprendimiento = slidesNoticiaEmprendimiento.length }
  for (i = 0; i < slidesNoticiaEmprendimiento.length; i++) {
    slidesNoticiaEmprendimiento[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaEmprendimiento.length; i++) {
    dotsNoticiaEmprendimiento[i].className = dotsNoticiaEmprendimiento[i].className.replace(" active", "");
  }
  slidesNoticiaEmprendimiento[slideIndexNoticiaEmprendimiento - 1].style.display = "flex";
  dotsNoticiaEmprendimiento[slideIndexNoticiaEmprendimiento - 1].className += " active";
}

//DEFENSA 
let slideIndexNoticiaDefensa = 1;
showSlidesNoticiaDefensa(slideIndexNoticiaDefensa);

// Next/previous controls
function plusSlidesNoticiaDefensa(n) {
  showSlidesNoticiaDefensa(slideIndexNoticiaDefensa += n);
}

// Thumbnail image controls
function currentSlideNoticiaDefensa(n) {
  showSlidesNoticiaDefensa(slideIndexNoticiaDefensa = n);
}

function showSlidesNoticiaDefensa(n) {
  let i;
  let slidesNoticiaDefensa = document.getElementsByClassName("slidesNoticiaDefensa");
  let dotsNoticiaDefensa = document.getElementsByClassName("dotNoticiaDefensa");
  if (n > slidesNoticiaDefensa.length) { slideIndexNoticiaDefensa = 1 }
  if (n < 1) { slideIndexNoticiaDefensa = slidesNoticiaDefensa.length }
  for (i = 0; i < slidesNoticiaDefensa.length; i++) {
    slidesNoticiaDefensa[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaDefensa.length; i++) {
    dotsNoticiaDefensa[i].className = dotsNoticiaDefensa[i].className.replace(" active", "");
  }
  slidesNoticiaDefensa[slideIndexNoticiaDefensa - 1].style.display = "flex";
  dotsNoticiaDefensa[slideIndexNoticiaDefensa - 1].className += " active";
}

//COVID 
let slideIndexNoticiaCovid = 1;
showSlidesNoticiaCovid(slideIndexNoticiaCovid);

// Next/previous controls
function plusSlidesNoticiaCovid(n) {
  showSlidesNoticiaCovid(slideIndexNoticiaCovid += n);
}

// Thumbnail image controls
function currentSlideNoticiaCovid(n) {
  showSlidesNoticiaCovid(slideIndexNoticiaCovid = n);
}

function showSlidesNoticiaCovid(n) {
  let i;
  let slidesNoticiaCovid = document.getElementsByClassName("slidesNoticiaCovid");
  let dotsNoticiaCovid = document.getElementsByClassName("dotNoticiaCovid");
  if (n > slidesNoticiaCovid.length) { slideIndexNoticiaCovid = 1 }
  if (n < 1) { slideIndexNoticiaCovid = slidesNoticiaCovid.length }
  for (i = 0; i < slidesNoticiaCovid.length; i++) {
    slidesNoticiaCovid[i].style.display = "none";
  }
  for (i = 0; i < dotsNoticiaCovid.length; i++) {
    dotsNoticiaCovid[i].className = dotsNoticiaCovid[i].className.replace(" active", "");
  }
  slidesNoticiaCovid[slideIndexNoticiaCovid - 1].style.display = "flex";
  dotsNoticiaCovid[slideIndexNoticiaCovid - 1].className += " active";
}