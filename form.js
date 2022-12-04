function formValidation() {
    if (validateName() && validatePhone()) {
        alert("All fields validated. Form will be submitted.");
        return true;
    }
    else {
        alert("Some fields are invalid. Correct them first.");
        return false;
    }
}

function validateName() {
    var uname = document.interest.name;
    var letters = /^[A-Za-z]+$/;
    document.getElementById("nameError").innerHTML = "";
    if (uname.value.match(letters))
    { return true; }
    else {
        document.getElementById("nameError").innerHTML = "[Name must contain alphabet characters only]";
        uname.focus();
        return false;
    }    
}

function validatePhone() {
    var ucontact = document.interest.phone;
    var numbers = /^(6|8|9)[0-9]{7}$/;
    document.getElementById("phoneError").innerHTML = "";
    var ucontact_len = ucontact.value.length;
    if (ucontact.value.match(numbers))
    { return true; }
    else if (ucontact_len != 8)
    {
        document.getElementById("phoneError").innerHTML = "[Contact number should contain 8 digits]";
        ucontact.focus();
        return false;
    }
    else{
        document.getElementById("phoneError").innerHTML = "[Contact number should start with 6,8,9]";
        ucontact.focus();
        return false;
    }
}