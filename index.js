// Скрипт обратного отсчета
const weddingDate = new Date("2025-09-05T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);

// Скрипт анимации появления блоков
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

//Скрипт обращения к гостям по имени
let params = new URLSearchParams(document.location.search);
let guestsParam = params.get("guests");

const guests = new Map([
    ["Беловы", "Папа, Мама и Александр"],
    ["Матвейкины", "Папа и Мама"],
    ["Иванниковы", "Александр, Татьяна и Николь"],
    ["Ivannikovi", "Александр, Татьяна и Николь"],
    ["Заева", "бабушка Галя"],
    ["Барановы", "дедушка Коля и бабушка Надя"],
    ["Чумичевы", "Евгений и Анна"],
    ["Крюковы", "Виталий и София"],
    ["Меньшовы", "Эдуард, Татьяна и Кирилл"],
    ["Поповы", "Игорь и Елена"],
    ["Лазаревы", "Евгений, Алевтина, Полина и Алина"],
    ["Иванниковы2", "Николай и Галина"],
    ["Прикота", "Оксана"],
    ["Бурдастых", "Полина и Святослав"],
    ["Бурдастых2", "Светлана и Виктор"],
    ["Прикота2", "Алексей и Светлана"],
    ["Матвейкины2", "Юрий и Жанна"],
    ["Матвейкин", "Максим"],
    ["Матвейкины3", "Матвей и Софья"],
    ["Тетеревы", "Олег и Ирина"],
    ["Комолых", "Павел, Ольга и Иван"],
    ["Амосовы", "Дмитрий и Инна"],
    ["Лавилина", "Лидия"]
]);

if (guests.has(guestsParam)) {
    let dear = "Дорогие ";
    if (guests.get(guestsParam).split(" ").length < 3)
        dear = "Дорогая "
    if (guestsParam == "Матвейкин")
        dear = "Дорогой "
    document.getElementById("guests").innerText = dear + guests.get(guestsParam) + "!";
}    