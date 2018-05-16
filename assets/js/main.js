//modul billeder ansatte

function ansatte1() {
  //få fat i modul 1
  var modal = document.querySelector(".modal1");

  //få fat i bilelde og put det ind i modul og brug alt tekst som info 1
  var img = document.querySelector(".ansatpic1");
  var modalImg = document.querySelector("#img1");
  var infotext = document.querySelector(".picinfo1");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "200px";
    modalImg.style.height = "198px";
    modalImg.style.borderRadius = "0";
  }



  //få fat i span der lukker modul 1
  var span = document.querySelector(".closebtn1");

  //når bruger klikker på span så luk modul 1
  span.onclick = function() {
    modal.style.display = "none";
  }
}

function ansatte2() {
  //få fat i modul 2
  var modal = document.querySelector(".modal2");

  //få fat i bilelde og put det ind i modul og brug alt tekst som info 2
  var img = document.querySelector(".ansatpic2");
  var modalImg = document.querySelector("#img2");
  var infotext = document.querySelector(".picinfo2");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "200px";
    modalImg.style.height = "198px";
    modalImg.style.borderRadius = "0";
  }



  //få fat i span der lukker modul 2
  var span = document.querySelector(".closebtn2");

  //når bruger klikker på span så luk modul 2
  span.onclick = function() {
    modal.style.display = "none";
  }
}

function ansatte3() {
  //få fat i modul 3
  var modal = document.querySelector(".modal3");

  //få fat i bilelde og put det ind i modul og brug alt tekst som info 3
  var img = document.querySelector(".ansatpic3");
  var modalImg = document.querySelector("#img3");
  var infotext = document.querySelector(".picinfo3");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "200px";
    modalImg.style.height = "198px";
    modalImg.style.borderRadius = "0";
  }



  //få fat i span der lukker modul 3
  var span = document.querySelector(".closebtn3");

  //når bruger klikker på span så luk modul 3
  span.onclick = function() {
    modal.style.display = "none";
  }
}

function ansatte4() {
  //få fat i modul 4
  var modal = document.querySelector(".modal4");

  //få fat i bilelde og put det ind i modul og brug alt tekst som info 4
  var img = document.querySelector(".ansatpic4");
  var modalImg = document.querySelector("#img4");
  var infotext = document.querySelector(".picinfo4");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "200px";
    modalImg.style.height = "198px";
    modalImg.style.borderRadius = "0";
  }



  //få fat i span der lukker modul 4
  var span = document.querySelector(".closebtn4");

  //når bruger klikker på span så luk modul 4
  span.onclick = function() {
    modal.style.display = "none";
  }
}

function ansatte5() {
  //få fat i modul 5
  var modal = document.querySelector(".modal5");

  //få fat i bilelde og put det ind i modul og brug alt tekst som info 5
  var img = document.querySelector(".ansatpic5");
  var modalImg = document.querySelector("#img5");
  var infotext = document.querySelector(".picinfo5");
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.style.width = "200px";
    modalImg.style.height = "198px";
    modalImg.style.borderRadius = "0";
  }



  //få fat i span der lukker modul 5
  var span = document.querySelector(".closebtn5");

  //når bruger klikker på span så luk modul 5
  span.onclick = function() {
    modal.style.display = "none";
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
