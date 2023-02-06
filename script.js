const submitButton = document.querySelector(".submit-button");
const firstNameInput = document.getElementById("first_name");
const inputExpandList = document.querySelectorAll(".input-expands")

function validateUsername(string) {
    if (string.length < 3 || string.length > 20) {
        console.log("username must be between 3 and 20 characters.")
    } else {
        console.log("good username")
    }
}

submitButton.addEventListener("click", () => {
    validateUsername(firstNameInput.value);
})

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

