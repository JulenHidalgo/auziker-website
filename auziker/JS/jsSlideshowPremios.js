//BUM SARIAK
let slideIndexBum = 1;
showSlidesBum(slideIndexBum);

// Next/previous controls
function plusSlidesBum(n) {
  showSlidesBum(slideIndexBum += n);
}

// Thumbnail image controls
function currentSlideBum(n) {
  showSlidesBum(slideIndexBum = n);
}

function showSlidesBum(n) {
  let i;
  let slidesBum = document.getElementsByClassName("slidesBum");
  let dotsBum = document.getElementsByClassName("dotBum");
  if (n > slidesBum.length) { slideIndexBum = 1 }
  if (n < 1) { slideIndexBum = slidesBum.length }
  for (i = 0; i < slidesBum.length; i++) {
    slidesBum[i].style.display = "none";
  }
  for (i = 0; i < dotsBum.length; i++) {
    dotsBum[i].className = dotsBum[i].className.replace(" active", "");
  }
  slidesBum[slideIndexBum - 1].style.display = "flex";
  dotsBum[slideIndexBum - 1].className += " active";
}

//BBK ARIN
let slideIndexArin = 1;
showSlidesArin(slideIndexArin);

// Next/previous controls
function plusSlidesArin(n) {
  showSlidesArin(slideIndexArin += n);
}

// Thumbnail image controls
function currentSlideArin(n) {
  showSlidesArin(slideIndexArin = n);
}

function showSlidesArin(n) {
  let i;
  let slidesArin = document.getElementsByClassName("slidesArin");
  let dotsArin = document.getElementsByClassName("dotArin");
  if (n > slidesArin.length) { slideIndexArin = 1 }
  if (n < 1) { slideIndexArin = slidesArin.length }
  for (i = 0; i < slidesArin.length; i++) {
    slidesArin[i].style.display = "none";
  }
  for (i = 0; i < dotsArin.length; i++) {
    dotsArin[i].className = dotsArin[i].className.replace(" active", "");
  }
  slidesArin[slideIndexArin - 1].style.display = "flex";
  dotsArin[slideIndexArin - 1].className += " active";
}

//THINK BIG
let slideIndexBig = 1;
showSlidesBig(slideIndexBig);

// Next/previous controls
function plusSlidesBig(n) {
  showSlidesBig(slideIndexBig += n);
}

// Thumbnail image controls
function currentSlideBig(n) {
  showSlidesBig(slideIndexBig = n);
}

function showSlidesBig(n) {
  let i;
  let slidesBig = document.getElementsByClassName("slidesBig");
  let dotsBig = document.getElementsByClassName("dotBig");
  if (n > slidesBig.length) { slideIndexBig = 1 }
  if (n < 1) { slideIndexBig = slidesBig.length }
  for (i = 0; i < slidesBig.length; i++) {
    slidesBig[i].style.display = "none";
  }
  for (i = 0; i < dotsBig.length; i++) {
    dotsBig[i].className = dotsBig[i].className.replace(" active", "");
  }
  slidesBig[slideIndexBig - 1].style.display = "flex";
  dotsBig[slideIndexBig - 1].className += " active";
}

//ABIATU
let slideIndexAbiatu = 1;
showSlidesAbiatu(slideIndexAbiatu);

// Next/previous controls
function plusSlidesAbiatu(n) {
  showSlidesAbiatu(slideIndexAbiatu += n);
}

// Thumbnail image controls
function currentSlideAbiatu(n) {
  showSlidesAbiatu(slideIndexAbiatu = n);
}

function showSlidesAbiatu(n) {
  let i;
  let slidesAbiatu = document.getElementsByClassName("slidesAbiatu");
  let dotsAbiatu = document.getElementsByClassName("dotAbiatu");
  if (n > slidesAbiatu.length) { slideIndexAbiatu = 1 }
  if (n < 1) { slideIndexAbiatu = slidesAbiatu.length }
  for (i = 0; i < slidesAbiatu.length; i++) {
    slidesAbiatu[i].style.display = "none";
  }
  for (i = 0; i < dotsAbiatu.length; i++) {
    dotsAbiatu[i].className = dotsAbiatu[i].className.replace(" active", "");
  }
  slidesAbiatu[slideIndexAbiatu - 1].style.display = "flex";
}

//CON NOMBRE PROPIO
let slideIndexPropio = 1;
showSlidesPropio(slideIndexPropio);

// Next/previous controls
function plusSlidesPropio(n) {
  showSlidesPropio(slideIndexPropio += n);
}

// Thumbnail image controls
function currentSlidePropio(n) {
  showSlidesPropio(slideIndexPropio = n);
}

function showSlidesPropio(n) {
  let i;
  let slidesPropio = document.getElementsByClassName("slidesPropio");
  let dotsPropio = document.getElementsByClassName("dotPropio");
  if (n > slidesPropio.length) { slideIndexPropio = 1 }
  if (n < 1) { slideIndexPropio = slidesPropio.length }
  for (i = 0; i < slidesPropio.length; i++) {
    slidesPropio[i].style.display = "none";
  }
  for (i = 0; i < dotsPropio.length; i++) {
    dotsPropio[i].className = dotsPropio[i].className.replace(" active", "");
  }
  slidesPropio[slideIndexPropio - 1].style.display = "flex";
  dotsPropio[slideIndexPropio - 1].className += " active";
}

//TORIBIO
let slideIndexToribio = 1;
showSlidesToribio(slideIndexToribio);

// Next/previous controls
function plusSlidesToribio(n) {
  showSlidesToribio(slideIndexToribio += n);
}

// Thumbnail image controls
function currentSlideToribio(n) {
  showSlidesToribio(slideIndexToribio = n);
}

function showSlidesToribio(n) {
  let i;
  let slidesToribio = document.getElementsByClassName("slidesToribio");
  let dotsToribio = document.getElementsByClassName("dotToribio");
  if (n > slidesToribio.length) { slideIndexToribio = 1 }
  if (n < 1) { slideIndexToribio = slidesToribio.length }
  for (i = 0; i < slidesToribio.length; i++) {
    slidesToribio[i].style.display = "none";
  }
  for (i = 0; i < dotsToribio.length; i++) {
    dotsToribio[i].className = dotsToribio[i].className.replace(" active", "");
  }
  slidesToribio[slideIndexToribio - 1].style.display = "flex";
  dotsToribio[slideIndexToribio - 1].className += " active";
}