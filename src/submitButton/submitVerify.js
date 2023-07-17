export const sumbitVerify = (event) => {
    event.preventDefault();
    var inputs = document.querySelectorAll(".projectinput");
    var isFormValid = true;

    // Check if any input is empty
    inputs.forEach(function (input) {
        if (input.value.trim() === '') {
            isFormValid = false;
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }
    });

    document.querySelector(".projectform").toggleAttribute("hidden");
    return isFormValid;
}