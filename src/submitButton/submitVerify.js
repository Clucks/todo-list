export const submitVerify = (event, inputSelector) => {
    console.log("Sumbit verify is currently running");
    event.preventDefault();

    var inputs = document.querySelectorAll(inputSelector);
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

    return isFormValid;
}
