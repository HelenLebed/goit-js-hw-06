const listElement = document.querySelector("#categories");

const children = listElement.children;

console.log("Number of categories:", children.length);

for (const liItem of children) {
    printCategory(liItem);
}

function printCategory(item) {
    const itemChildren = item.children;
    console.log("");

    const title = itemChildren[0].textContent;
    console.log("Category:", title);
    const listItems = itemChildren[1].children.length;
    console.log("Elements:", listItems);
}
console.log(document.querySelector("ul"));
