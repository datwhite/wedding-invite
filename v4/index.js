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
    ["Чумичевы", "Евгений и Анна"],
    ["Крюковы", "Виталий и София"],
    ["Меньшовы", "Эдуард, Татьяна и Кирилл"],
    ["Поповы", "Игорь и Елена"],
    ["Лазаревы", "Евгений, Алевтина, Полина и Алина"]
]);

if (guests.get(guestsParam) != undefined)
    document.getElementById("guests").innerText = "Дорогие " + guests.get(guestsParam) + "!";