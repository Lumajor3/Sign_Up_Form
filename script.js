const submitButton = document.querySelector(".submit-button");
const firstNameInput = document.getElementById("first_name");
const inputExpandList = document.querySelectorAll(".input-expands")

let invalidInputs = [];
let validInputs = [];

for (const input of inputExpandList) {
    input.addEventListener("focus", () => {
        focusInput(input.id)
    })
    input.addEventListener("focusout", () => {
        unfocusInput(input.id)
    })
}

function focusInput(inputId) {
    let inputBoxName = inputId.substring(5, inputId.length)
    let elementToShow = document.querySelector("#" + inputBoxName + "_subtext");
    console.log("." + inputBoxName + "_subtext");
    elementToShow.classList.remove("input-subtext");
    elementToShow.classList.add("focused-subtext");
}

function unfocusInput(inputId) {
    let inputBoxName = inputId.substring(5, inputId.length)
    let elementToShow = document.querySelector("#" + inputBoxName + "_subtext");
    console.log("." + inputBoxName + "_subtext");
    elementToShow.classList.remove("focused-subtext");
    elementToShow.classList.add("input-subtext");
}

function validateEmail(emailString) {
    const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validEmailRegex.test(emailString)) {
        if (!validInputs.includes("email")) {
            checkInputArray(invalidInputs, "email")
            validInputs.push("email")
            console.log(invalidInputs);
            console.log(validInputs);
        }
    } else {
        if (!invalidInputs.includes("email")) {
            checkInputArray(validInputs, "email")
            invalidInputs.push("email")
            console.log(invalidInputs);
            console.log(validInputs);
        }
    }
}

function validatePhone(phoneString) {
    const validPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (validPhoneRegex.test(phoneString)) {
        if (!validInputs.includes("phone")) {
            checkInputArray(invalidInputs, "phone")
            validInputs.push("phone")
        }
    } else {
        if (!invalidInputs.includes("phone")) {
            checkInputArray(validInputs, "phone")
            invalidInputs.push("phone")
        }
    }
}

function validatePassword(passwordString) {
    const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{9,}$/;
    if (validPasswordRegex.test(passwordString)) {
        if (!validInputs.includes("password")) {
            checkInputArray(invalidInputs, "password")
            validInputs.push("password")
        }
    } else {
        if (!invalidInputs.includes("password")) {
            checkInputArray(validInputs, "password")
            invalidInputs.push("password")
        }
    }
}

function validateConfirmPassword(passwordString) {
    if (document.getElementById("user_password").value == passwordString) {
        if (!validInputs.includes("confirm password")) {
            checkInputArray(invalidInputs, "confirm password")
            validInputs.push("confirm password")
        }
    } else {
        if (!invalidInputs.includes("confirm password")) {
            checkInputArray(validInputs, "confirm password")
            invalidInputs.push("confirm password")
        }
    }
}

submitButton.addEventListener("click", () => {
    validateEmail(document.getElementById("user_email").value);
    validatePhone(document.getElementById("user_phone").value);
    validatePassword(document.getElementById("user_password").value);
    validateConfirmPassword(document.getElementById("user_password2").value);
    showErrorList()
})

function checkInputArray(array, string) {
    if (array.includes(string)) {
        let arrayIndex = array.indexOf(string)
        array.splice(arrayIndex, 1);
    }
}

function showErrorList () {
    let inputErrorList = document.getElementById("input_error_list");
    if (invalidInputs.length > 0) {
        document.getElementById("input_error_container").style.display = "inline-block";
        document.getElementById("input_validated_container").style.display = "none";
        while (inputErrorList.firstChild) {
            inputErrorList.removeChild(inputErrorList.firstChild);
        }

        invalidInputs.forEach(input => {
            let newListItem = document.createElement("li");
            newListItem.textContent = input;
            inputErrorList.appendChild(newListItem);
        })
    } else {
        document.getElementById("input_error_container").style.display = "none";
        document.getElementById("input_validated_container").style.display = "inline-block";
    }
}