let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Когда прокручиваем вниз, скрыть шапку
        header.style.top = "-80px"; 
    } else {
        // Когда прокручиваем вверх, показать шапку
        header.style.top = "0"; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
