// JavaScript для скрытия шапки при прокрутке
let lastScrollTop = 0; // Переменная для отслеживания предыдущего положения

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Если прокручено вниз и текущая позиция больше предыдущей, скрыть шапку
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add('shrunk'); // Добавляем класс для скрытия шапки
    } else {
        header.classList.remove('shrunk'); // Убираем класс, когда прокрутка вверх
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Чтобы не получить отрицательные значения
});
