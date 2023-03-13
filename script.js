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

const kgsToRub = document.querySelector('#kgs-rub');//курс сом и рубля
fetch('http://www.floatrates.com/daily/rub.json')
    .then((response) => response.json())
    .then(data => {
        kgsToRub.textContent = data.kgs.rate.toFixed(2) + "com";
    });

const weather = document.querySelector('#weather');
fetch('https://api.open-meteo.com/v1/forecast?latitude=42.4907&longitude=78.3936&current_weather=true')
    .then((response) => response.json())
    .then(data => {
        weather.textContent = data.current_weather.temperature + "°C";
    });

const nasaPhoto = document.querySelector('#nasa-photo');//добавили фотку с наса
fetch('https://go-apod.herokuapp.com/apod')
    .then((response) => response.json())
    .then(data => {
        nasaPhoto.textContent = "";

        const img = document.createElement('img');
        img.src = data.url;
        img.alt = data.title;//если не загружается то будет этот текст
        img.title = data.explanation; // если навести то будет описание на сайте про картинку с наса
        img.width = 300;//размер
        nasaPhoto.append(img);
    });



const photoDog = document.querySelector('#random-dog');
fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(data => {
        photoDog.textContent = "";

        const img = document.createElement('img');
        img.src = data.message;
        img.width = 300;//размер
        photoDog.append(img);
    });



//создали асинхроный запрос кот выдает что можно поделать если тебе скучно
const activityBored = document.querySelector('#bored');
fetch('https://www.boredapi.com/api/activity')
    .then((response) => response.json())
    .then(data => {
        activityBored.textContent = data.activity;
    });




//при нажатии на кнопку угадать возраст по имени
document.querySelector("#guess-age").addEventListener("click", function () {
    //получаем имя из поля ввода
    const name = document.querySelector("#name").value;
    //отправляем запрос на сервер 
    fetch("https://api.agify.io?name=" + name)
        .then((response) => response.json())
        .then((data) => {
            //вставляем взраст в элемент с id="age"
            document.querySelector("#age").textContent = data.age;
        });
});



//при нажатии угадывает страну
document.querySelector("#guess-country").addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    fetch("https://api.nationalize.io/?name=" + name)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#country").textContent = data.country[0].country_id;
        });
})
 




let gender = document.querySelector("#gender");
document.querySelector("#who").addEventListener("click", function () {
    gender.textContent = "Loading...";
    fetch("https://api.genderize.io/?name=" + ggg.value)
        .then((response) => response.json())
        .then((data) => {
            gender.textContent = + data.gender;
        });
});



