// DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// ------ FORM FIELDS VALIDATION ------ //
// NAMES CHECK (FIRST NAME AND LAST NAME)
function setError(element) {
    element.parentElement.setAttribute('data-error-visible', 'true');
    element.classList.remove("sucess");
    element.classList.add("error");

    return false;
}
function setSuccess(element) {
    element.parentElement.setAttribute('data-error-visible', 'false');
    element.classList.remove("error");
    element.classList.add("success");

    return true;
}
function checkFirstName() {
    if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regexName)) {
        //  firstName.parentElement.setAttribute('data-error-visible', 'true');
        // firstName.classList.add("error");
        //return false;
        return setError(firstName);

    }
    //firstName.parentElement.setAttribute('data-error-visible', 'false');
    //firstName.classList.add("success");
    //return true;
    return setSuccess(firstName);
}


function checkLastName() {
    if (lastName.value.trim().length < 2 || lastName.value.trim() === "" || !lastName.value.match(regexName)) {
        // lastName.parentElement.setAttribute('data-error-visible', 'true');
        // lastName.classList.add("error");
        // return false;
        return setError(lastName);
    }
    //lastName.parentElement.setAttribute('data-error-visible', 'false');
    //lastName.classList.add("success");
    // return true;
    return setSuccess(lastName);
}

// EMAIL CHECK
function checkEmail() {
    if (email.value.trim().match(regexEmail)) {
        // email.parentElement.setAttribute('data-error-visible', 'true');
        // email.classList.add("error");
        // return false;
        return setSuccess(email);
    }

    email.parentElement.setAttribute('data-error-visible', 'true');
    //lastName.parentElement.setAttribute('data-error-visible', 'false');
    // email.classList.add("success");
    //return true;
    return setError(email);
}



// BIRTHDATE CHECK
function checkBirthdate() {
    if (birthdate.value.trim().length !== 10) {
        // birthdate.parentElement.setAttribute('data-error-visible', 'true');
        // birthdate.classList.add("error");
        // return false;
        return setError(birthdate);

    }
    // birthdate.parentElement.setAttribute('data-error-visible', 'false');
    // birthdate.classList.add("error");
    // return true;
    return setSuccess(birthdate);
}

// NUMBER OF TOURNAMENTS CHECK
function checkTournamentsQuantity() {
    if (quantity.value.trim().length === 0 || isNaN(quantity.value.trim()) === true || quantity.value.trim() < 0) {
        // quantity.parentElement.setAttribute('data-error-visible', 'true');
        // quantity.style.border = '2px solid #e54858';
        // return false;
        return setError(quantity);
    }
    // quantity.parentElement.setAttribute('data-error-visible', 'false');
    // quantity.style.border = 'solid #279e7a 0.19rem';
    // return true;
    return setSuccess(quantity);
}

// LOCATIONS CHECK
function checkLocations() {
    allLocations.setAttribute('data-error-visible', 'true');
    for (let i = 0; i < locations.length; i++) {
        if (locations[i].checked) {
            allLocations.setAttribute('data-error-visible', 'false');
            return true;
        }
    }
    return false;
}

// TERMS OF USE CHECK CHECK
function checkCheckBox() {
    if (checkbox1.checked === false) {
        checkbox1.parentElement.setAttribute('data-error-visible', 'true');
        return false;
    }
    checkbox1.parentElement.setAttribute('data-error-visible', 'false');
    return true;
}

// FORM FIELDS EVENTS
function formFieldsValidation(element, method, event) {
    element.addEventListener(event, method);
}
formFieldsValidation(firstName, checkFirstName, 'focusout');
formFieldsValidation(lastName, checkLastName, 'focusout');
formFieldsValidation(email, checkEmail, 'focusout');
formFieldsValidation(birthdate, checkBirthdate, 'focusout');
formFieldsValidation(quantity, checkTournamentsQuantity, 'focusout');
formFieldsValidation(allLocations, checkLocations, 'change');
formFieldsValidation(checkbox1, checkCheckBox, 'change');

// FOR ALL FIELDS VALIDATION
function forAllFieldsValidation() {
    checkFirstName()
    checkLastName()
    checkEmail()
    checkBirthdate()
    checkTournamentsQuantity()
    checkLocations()
    checkCheckBox()
}

function formValidation() {
    if (checkFirstName() === true &&
        checkLastName() === true &&
        checkEmail() === true &&
        checkBirthdate() === true &&
        checkTournamentsQuantity() === true &&
        checkLocations() === true &&
        checkCheckBox() === true) {
        return true;
    }
    return false;
}

// SEND FORM
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (formValidation() == true) {
        displayModalSubmit();
        document.querySelector('form').reset();
    } else {
        forAllFieldsValidation();
    }
});



