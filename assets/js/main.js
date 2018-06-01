//modul billeder ansatte

function ansatte() {

  //få fat i bilelde og put det ind i modul og brug tekst som info 1
  var img = document.querySelectorAll(".ansatpic");
  for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
      var modal = this.nextElementSibling;
      var imgNodes = modal.childNodes;
      imgNodes[3].setAttribute("src", this.src);
      imgNodes[3].classList.add("billedetest");
      modal.classList.add("blockdisplay");
      imgNodes[1].onclick = function() {
      modal.classList.remove("blockdisplay");
      }
    }
  }
}

function validateForm() {
  var navn = document.querySelector(".navninput");
  var email = document.querySelector(".emailinput");
  var number = document.querySelector(".nummerinput");
  var submit = document.querySelector(".submitbutton");
  var besked = document.querySelector(".beskedinput");
  var required = document.querySelectorAll(".req");

  submit.onclick = function() {
    // hvis man ikke skriver noget i navn input eller bruger tal i navn
    if (navn.value == "") {
      required[0].innerHTML = "Udfyld venligst navn";
      return false;
    } else if (!isNaN(navn.value) && navn.value.length > 1) {
      required[0].innerHTML = "Benyt venligst bogstaver";
      return false;
    } else {
      required[0].innerHTML = "*";
    }

    // hvis man ikke skriver noget i email eller ikke bruger @ i email
    if (email.value == "") {
      required[1].innerHTML = "Udfyld venligst E-mail";
      return false;
    } else if (!email.value.includes("@")) {
      required[1].innerHTML = "Skriv venligst korrekt E-mail";
      return false;
    } else {
      required[1].innerHTML = "*";
    }

    //hvis man ikke skriver noget i nummer, bruger bogstaver eller ikke skiver 8 cifre
    if (number.value == "") {
      required[2].innerHTML = "Skriv venligst telefonnummer";
      return false;
    } else if (isNaN(number.value)) {
      required[2].innerHTML = "Benyt venligst tal";
      return false;
    } else if (number.value.length != 8) {
      required[2].innerHTML = "Skriv venligst 8 cifre";
      return false;
    } else {
      required[2].innerHTML = "*";
    }

    // hvis man ikke skriver noget i besked input
    if (besked.value == "") {
      required[3].innerHTML = "Skriv venligst en besked";
      return false;
    } else {
      required[3].innerHTML = "*";
    }
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
  var togglebtn = document.querySelector(".button-aabningstider1");

  //toggle on click
  togglebtn.onclick = function() {
    var workinghours = document.querySelector(".info-aabningstider1")
    if (workinghours.style.display === "none") {
        workinghours.style.display = "block";
        togglebtn.innerHTML = "-";
    } else {
        workinghours.style.display = "none";
        togglebtn.innerHTML = "+";
    }
  }
}

function workingHours2() {
  //get headline
  var togglebtn = document.querySelector(".button-aabningstider2");

  //toggle on headline click
  togglebtn.onclick = function() {
    var workinghours = document.querySelector(".info-aabningstider2")
    if (workinghours.style.display === "none") {
        workinghours.style.display = "block";
        togglebtn.innerHTML = "-";
    } else {
        workinghours.style.display = "none";
        togglebtn.innerHTML = "+";
    }
  }
}

//modal popup galleri
function galleri() {
  var galleriPic = document.querySelectorAll(".galleri-pic");
  for (var i = 0; i < galleriPic.length; i++) {
    galleriPic[i].onclick = function() {
      var modal = this.nextElementSibling;
      var image = modal.childNodes;
      image[3].setAttribute("src", this.src);
      image[3].classList.add("billedetest");
      modal.classList.add("galleriblock");
      image[1].onclick = function() {
      modal.classList.remove("galleriblock");
    }
    }
  }
}

function galleriKategorier() {
  var fastelavnBtn = document.querySelector(".fastelavn-knap");
  var skoleteaterBtn = document.querySelector(".skoleteater-knap");
  var uspBtn = document.querySelector(".usp-knap");
  var galleriContainer = document.querySelector(".galleri-billeder");
  var fastelavnPic = document.querySelector(".fastelavn-billeder");
  var skoleteaterPic = document.querySelector(".skoleteater-billeder");
  var uspPic = document.querySelector(".universe-science-park");

  fastelavnBtn.onclick = function() {
    if (fastelavnBtn.hasAttribute("style", "background-color: white;")) {
      fastelavnBtn.removeAttribute("style", "background-color: white;");
    }

    skoleteaterBtn.removeAttribute("style", "background-color: white;");
    uspBtn.removeAttribute("style", "background-color: white;");

    if (fastelavnPic.style.display === "none") {
      fastelavnPic.style.display = "inline";
      galleriContainer.style.display = "block";
      fastelavnBtn.setAttribute("style", "background-color: white;");
      fastelavnBtn.classList.add("bluebutton");
      skoleteaterBtn.classList.remove("bluebutton");
      skoleteaterPic.style.display = "none";
      uspBtn.classList.remove("bluebutton");
      uspPic.style.display = "none";
    } else {
      fastelavnPic.style.display = "none";
      galleriContainer.style.display = "none";
      fastelavnBtn.removeAttribute("style", "background-color: white;");
      fastelavnBtn.classList.remove("bluebutton");
    }
  }

  skoleteaterBtn.onclick = function() {
    if (skoleteaterBtn.hasAttribute("style", "background-color: white;")) {
      skoleteaterBtn.removeAttribute("style", "background-color: white;");
      fastelavnBtn.removeAttribute("style", "background-color: white;");
      uspBtn.removeAttribute("style", "background-color: white;");
    }

    fastelavnBtn.removeAttribute("style", "background-color: white;");
    uspBtn.removeAttribute("style", "background-color: white;");

    if (skoleteaterPic.style.display === "none") {
      skoleteaterPic.style.display = "inline";
      galleriContainer.style.display = "block";
      skoleteaterBtn.setAttribute("style", "background-color: white;");
      skoleteaterBtn.classList.add("bluebutton");
      fastelavnBtn.classList.remove("bluebutton");
      fastelavnPic.style.display = "none";
      uspBtn.classList.remove("bluebutton");
      uspPic.style.display = "none";
    } else {
      skoleteaterPic.style.display = "none";
      galleriContainer.style.display = "none";
      skoleteaterBtn.removeAttribute("style", "background-color: white;");
      skoleteaterBtn.classList.remove("bluebutton");
      uspBtn.removeAttribute("style", "background-color: white;");
      uspBtn.classList.remove("bluebutton");
    }
  }

  uspBtn.onclick = function () {
    if (uspBtn.hasAttribute("style", "background-color: white;")) {
      uspBtn.removeAttribute("style", "background-color: white;");
      fastelavnBtn.removeAttribute("style", "background-color: white;");
      skoleteaterBtn.removeAttribute("style", "background-color: white;");
    }

    fastelavnBtn.removeAttribute("style", "background-color: white;");
    skoleteaterBtn.removeAttribute("style", "background-color: white;");

    if (uspPic.style.display === "none") {
      uspPic.style.display = "inline";
      galleriContainer.style.display = "block";
      uspBtn.setAttribute("style", "background-color: white;");
      uspBtn.classList.add("bluebutton");
      fastelavnBtn.classList.remove("bluebutton");
      fastelavnPic.style.display = "none";
      skoleteaterBtn.classList.remove("bluebutton");
      skoleteaterPic.style.display = "none";
    } else {
      uspPic.style.display = "none";
      galleriContainer.style.display = "none";
      uspBtn.removeAttribute("style", "background-color: white;");
      uspBtn.classList.remove("bluebutton");
    }
  }
}

function navOpen() {
  var sidenav = document.querySelector(".side-nav");
  var openBtn = document.querySelector(".open-nav");
  openBtn.onclick = function() {
    sidenav.style.display = "block";
    sidenav.style.width = "250px";
  }

}

function navClose() {
  var sidenav = document.querySelector(".side-nav");
  var closeBtn = document.querySelector(".closebutton");
  closeBtn.onclick = function() {
    sidenav.style.display = "none";
    sidenav.style.width = "0";
  }
}

function slideShow() {
 var slideIndex = 0;
 showSlides();

 function showSlides() {

   var slides = document.getElementsByClassName("slides");
   for (var i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {
     slideIndex = 1;
   }
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 7000);
 }
}
