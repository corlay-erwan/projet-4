// DOM ELEMENTS MODAL 
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelector("#modal-btn");
const modalBtn2 = document.querySelector("#modal-btn2");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName("close");
const burger = document.getElementById("burger");

// ------ DISPLAY MODAL ------ //
// addEventListener
modalBtn.addEventListener('click', launchModal);
modalBtn2.addEventListener('click', launchModal);
closeBtn[0].addEventListener('click', closeModal);
burger.addEventListener('click', editNav);

// FONCTION 

//ouvre la modale
function launchModal() {
    modalbg.style.display = 'block';
}

//ferme la modale
function closeModal() {
    modalbg.style.display = 'none';
}


// ------ DISPLAY NAV RESPONSIVE ------ //
// EDIT NAV
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}