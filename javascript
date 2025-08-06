// Анимация кнопки при нажатии
const button = document.querySelector('button');
button.addEventListener('click', () => {
    button.style.transform = 'scale(1.2)';
    button.style.transition = '0.3s';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 300);
});

// Плавный скролл по меню
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Этот раздел пока не сделан :)');
    });
});
