document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.querySelector(".navbar-toggler");
    const togglerIcon = document.querySelector(".navbar-toggler-icon");
    toggler.addEventListener("click", function () {
        togglerIcon.classList.toggle("open");
    });
});
