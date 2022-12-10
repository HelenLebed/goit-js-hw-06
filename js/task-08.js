const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Here we're doing destructuring that equals:
    // const email = event.currentTarget.elements.email;
    // const password = event.currentTarget.elements.password;
    const { email, password } = event.currentTarget.elements;

    if (!email.value || !password.value) {
        return alert("Please fill in all the fields!");
    }
    const obj = {
        email: email.value,
        password: password.value,
    };
    console.log(obj);

    event.currentTarget.reset();
}
