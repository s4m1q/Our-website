// Основной JavaScript код для всех страниц

// Переключение темы
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Сохраняем выбор темы в localStorage
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            this.textContent = 'Светлая тема';
        } else {
            localStorage.setItem('theme', 'light');
            this.textContent = 'Тёмная тема';
        }
    });
}

// Загрузка сохраненной темы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        if (themeToggle) {
            themeToggle.textContent = 'Светлая тема';
        }
    } else if (themeToggle) {
        themeToggle.textContent = 'Тёмная тема';
    }
});

// Мобильное меню (работает на всех страницах)
const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
}

// Закрытие меню при клике на ссылку (для мобильных устройств)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.remove('active');
    });
});