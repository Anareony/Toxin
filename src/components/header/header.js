const burger = document.querySelector('.js-header__burger')
const target1 = document.querySelector('.header__nav-site');
const target2 = document.querySelector('.header__nav-user');

function openBurger() {
    const target1 = document.querySelector('.header__nav-site');
    burger.classList.toggle(".js-header__burger_opened")
    target1.style.display = "block";
    target2.style.display = "block";

    if(!burger.classList.contains(".js-header__burger_opened")) {
        target1.style.display = "none";
        target2.style.display = "none";
    }
}

burger.addEventListener('click', openBurger)