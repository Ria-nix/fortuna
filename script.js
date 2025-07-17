window.onscroll = function () {
    myFunction();
};

function myFunction() {
    var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
    var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// Функция для получения даты на вчерашний день
function obtenerFechaDeAyer() {
    // Создаем объект текущей даты
    const date = new Date();

    // Вычисляем вчерашний день
    date.setDate(date.getDate() - 1);

    // Определяем части даты
    const jour = date.getDate();
    const mois = date.toLocaleString("fr-FR", { month: "long" }); // Получаем название месяца на французском
    const annee = date.getFullYear();

    // Формируем строку в нужном формате
    return `le ${jour} ${mois} ${annee} à 19h00`;
}

// Отображаем дату в нужном месте на странице
document.addEventListener("DOMContentLoaded", () => {
    const elementoFecha = document.getElementById("fecha-ayer");
    if (elementoFecha) {
        elementoFecha.textContent = obtenerFechaDeAyer();
    }
});
