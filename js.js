let lastScrollTop = 0; // Переменная для отслеживания предыдущей прокрутки

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Если прокручиваем вниз и позиция больше предыдущей
    if (currentScroll > lastScrollTop && currentScroll > 100) {
        header.classList.add('shrunk'); // Скрываем шапку
    } else {
        header.classList.remove('shrunk'); // Показываем шапку
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Обновляем предыдущую прокрутку
});
