const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector("#ingredients");

const result = ingredients.map((element) => {
    const listItem = document.createElement("li");
    listItem.textContent += element;
    listItem.classList.add("item");

    return listItem;
});

list.append(...result);
console.log(list);

// const arr = [];

// for (let i = 0; i < ingredients.length; i++) {
//     // const element = ingredients[i];

// }
