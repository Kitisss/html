document.addEventListener('DOMContentLoaded', function() {
    let popup = document.querySelector('.popup-container');
    let openPopupButtons = document.querySelectorAll('.open-popup-bg');

    openPopupButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            popup.className = (popup.className === "popup-container") ? "popup-container active" : "popup-container";
        });
    });

    document.body.addEventListener('click', e => {
        if (!e.target.classList.contains("open-popup-bg") && document.querySelector(".popup-container.active")) {
            popup.className = "popup-container";
        }
    });
});