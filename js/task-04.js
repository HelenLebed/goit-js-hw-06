let counterValue = 0;
const count = document.querySelector("#value");

const buttonDec = document.querySelector('button[data-action="decrement"]');
const buttonInc = document.querySelector('button[data-action="increment"]');

const handleClick = (event) => {
    counterValue -= 1;
    count.textContent = counterValue;
};

buttonDec.addEventListener("click", handleClick);

const handleClick2 = (event) => {
    counterValue += 1;
    count.textContent = counterValue;
};

buttonInc.addEventListener("click", handleClick2);
