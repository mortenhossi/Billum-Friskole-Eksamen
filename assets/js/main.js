//modul billeder ansatte

//få fat i modul
var modal = document.querySelector(".modal");

//få fat i bilelde og put det ind i modul og brug alt tekst som info
var img = document.querySelector(".ansatpic");
var modalImg = document.querySelector("#img1");
var infotext = document.querySelector(".picinfo");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  infotext.innerHTML = this.alt;
  modalImg.style.width = "200px";
  modalImg.style.height = "198px";
  modalImg.style.borderRadius = "0";

}

//få fat i span der lukker modul
var span = document.querySelector(".closebtn");

//når bruger klikker på span så luk modul
span.onclick = function() {
  modal.style.display = "none";
}
