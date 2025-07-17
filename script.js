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
    const hoy = new Date();

    // Вычисляем вчерашний день
    hoy.setDate(hoy.getDate() - 1);

    // Определяем части даты
    const dia = hoy.getDate();
    const mes = hoy.toLocaleString("es-ES", { month: "long" }); // Получаем название месяца на испанском
    const anio = hoy.getFullYear();

    // Формируем строку в нужном формате
    return `${dia} de ${mes} de ${anio}`;
}

// Отображаем дату в нужном месте на странице
document.addEventListener("DOMContentLoaded", () => {
    const elementoFecha = document.getElementById("fecha-ayer");
    if (elementoFecha) {
        elementoFecha.textContent = obtenerFechaDeAyer();
    }
});

// Функция для получения текущего года
function obtenerAnoActual() {
    const hoy = new Date(); // Получаем текущую дату
    return hoy.getFullYear(); // Возвращаем текущий год
}

// Отображаем текущий год в нужном месте на странице
document.addEventListener("DOMContentLoaded", () => {
    const elementoAno = document.getElementById("year_actual");
    if (elementoAno) {
        elementoAno.textContent = obtenerAnoActual();
    }
});
