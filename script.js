const fancyList = document.querySelector(".fancy-list");

fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data) => {
        fancyList.textContent = "";

        for (let i = 0; i < data.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = data[i].title;
            fancyList.appendChild(listItem);
        }
    });

const kgsToUsd = document.querySelector('#kgs-usd');
fetch('http://www.floatrates.com/daily/usd.json')
    .then((response) => response.json())
    .then(data => {
        kgsToUsd.textContent = data.kgs.rate.toFixed(2) + "com";
    });

const kgsToRub = document.querySelector('#kgs-rub');
fetch('http://www.floatrates.com/daily/rub.json')
    .then((response) => response.json())
    .then(data => {
        kgsToRub.textContent = data.kgs.rate.toFixed(2) + "com";
    });    