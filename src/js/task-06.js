const textInput = document.querySelector("#validation-input");
const data = textInput.dataset.length;

textInput.addEventListener("blur", () => {
    if (textInput.value.length === Number(data)) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
    }
});
