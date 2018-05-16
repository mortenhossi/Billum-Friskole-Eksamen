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

function validateForm() {
    var navn = document.forms["kontakt"]["navn"].value;
    var email = document.forms["kontakt"]["email"].value;
    var telefonNummer = document.forms["kontakt"]["telefonnummer"].value;
    var textInput = document.forms["kontakt"]["textinput"].value;

    if (navn == "") {
        alert("Udfyld venligst Navn");
        return false;
    }
    if (!/^[a-åA-Å]*$/g.test(document.forms["kontakt"]["navn"].value)) {
        alert("Benyt venligst kun bogstaver");
        document.kontakt.navn.focus();
        return false;
    }
    if (email == "") {
        alert("Udfyld venligst E-mail")
        return false;
    }
    if (telefonNummer == "") {
        alert("Udfyld venligst Telefonnummer")
        return false;
    }
    if (!/^[0-9]*$/g.test(document.forms["kontakt"]["telefonnummer"].value)) {
        alert("Benyt venligst kun tal")
        return false
    }
    if (textInput == "") {
        alert("Udfyld venligst besked")
        return false;
    }
}
