document.getElementById('vacation-form').onsubmit = () => {

    clearErrors();

    // Flag variable to determine if form data is valid
    let isValid = true;

    let size = document.getElementById('destination').value;
    if (size === "none") {
        document.getElementById("err-destination").style.display = "block";
        isValid = false;
    }
    let travelers = document.getElementById('num-of-travelers').value;
    if (travelers < 10) {
        document.getElementById("err-num-of-travelers").style.display = "block";
        isValid = false;
    }

    return isValid;
}

function clearErrors() {
    let errors = document.getElementsByClassName("error");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}