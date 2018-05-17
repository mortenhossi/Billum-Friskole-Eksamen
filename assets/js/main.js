//modul billeder ansatte

function ansatte() {

  //få fat i bilelde og put det ind i modul og brug tekst som info 1
  var img = document.querySelectorAll(".ansatpic");
  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
      var modaltest = this.nextElementSibling;
      var imgtest = modaltest.childNodes;
      imgtest[3].setAttribute("src", this.src);
      imgtest[3].classList.add("billedetest");
      modaltest.classList.add("blockdisplay");
      imgtest[1].onclick = function() {
        modaltest.classList.remove("blockdisplay");
      }
    }
  }
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

//seneste modal

function senesteModal1() {

  //få fat i modal 1
  var modal = document.querySelector(".modal1");

  //få fat i knap der åbner modal 1
  var btn = document.querySelector(".button1");

  //få fat i span der lukker modal 1
  var span = document.querySelector(".closebtn1");

  //når man klikker på knap så åbner modal 1
  btn.onclick = function() {
    modal.style.display = "block";
  }

  //når man klikker på span så luk ned 1
  span.onclick = function() {
    modal.style.display = "none";

    //når man klikker et sted uden for modal, luk ned 1
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  }
}
}

function senesteModal2() {

  //få fat i modal 2
  var modal = document.querySelector(".modal2");

  //få fat i knap der åbner modal 2
  var btn = document.querySelector(".button2");

  //få fat i span der lukker modal 2
  var span = document.querySelector(".closebtn2");

  //når man klikker på knap så åbner modal 2
  btn.onclick = function() {
    modal.style.display = "block";
  }

  //når man klikker på span så luk ned 2
  span.onclick = function() {
    modal.style.display = "none";

    //når man klikker et sted uden for modal, luk ned 2
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

function senesteModal3() {

  //få fat i modal 3
  var modal = document.querySelector(".modal3");

  //få fat i knap der åbner modal 3
  var btn = document.querySelector(".button3");

  //få fat i span der lukker modal 3
  var span = document.querySelector(".closebtn3");

  //når man klikker på knap så åbner modal 3
  btn.onclick = function() {
    modal.style.display = "block";
  }

  //når man klikker på span så luk ned 3
  span.onclick = function() {
    modal.style.display = "none";

    //når man klikker et sted uden for modal, luk ned 3
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
}

//SFO og boernehave openhours

function workingHours1() {
  //get togglebtn
  var togglebtn = document.querySelector(".button-åbningstider1");

  //toggle on click
  togglebtn.onclick = function() {
    var workinghours = document.querySelector(".info-åbningstider1")
    if (workinghours.style.display === "none") {
        workinghours.style.display = "block";
    } else {
        workinghours.style.display = "none";
    }
  }
}

function workingHours2() {
  //get headline
  var togglebtn = document.querySelector(".button-åbningstider2");

  //toggle on headline click
  togglebtn.onclick = function() {
    var workinghours = document.querySelector(".info-åbningstider2")
    if (workinghours.style.display === "none") {
        workinghours.style.display = "block";
    } else {
        workinghours.style.display = "none";
    }
  }
}
