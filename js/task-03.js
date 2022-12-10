const images = [
    {
        url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "White and Black Long Fur Cat",
    },
    {
        url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
        url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "Group of Horses Running",
    },
];

const list = document.querySelector(".gallery");

const result = images
    .map(
        (obj) =>
            `<li class="list-item"><img src=${obj.url} alt=${obj.alt} height = "200px" width = "200px"></img></li>`
    )
    .join("");

list.insertAdjacentHTML("afterbegin", result);
list.style.display = "flex";
list.style.flexDirection = "column";
