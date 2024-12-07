document.addEventListener('DOMContentLoaded', function() {
    let popup = document.querySelector('.popup-container');
    let openPopupButtons = document.querySelectorAll('.open-popup-bg');

    openPopupButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            popup.classList.toggle('active');
        });
    });

    document.body.addEventListener('click', e => {
        if (!e.target.classList.contains("open-popup-bg") && popup.classList.contains("active")) {
            popup.classList.remove('active');
        }
    });
});