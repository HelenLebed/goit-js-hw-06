const textInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

textInput.addEventListener("input", (event) => {
    textSpan.style.fontSize = event.currentTarget.value + "px";
});
