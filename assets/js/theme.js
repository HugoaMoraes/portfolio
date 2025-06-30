document.addEventListener('DOMContentLoaded', function () {
    const themeBtn = document.querySelector('.toggle-theme');
    const body = document.body;

    // Carrega preferência ao abrir
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Salva preferência no localStorage
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});
