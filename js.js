document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Когда прокручиваем вниз, скрыть шапку и сделать её компактной
            header.style.top = "-180px";
            header.classList.add('shrunk'); // Добавляем класс для сжатия
        } else {
            // Когда прокручиваем вверх, вернуть шапку и убрать сжатие
            header.style.top = "0";
            header.classList.remove('shrunk');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});
