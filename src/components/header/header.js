const burger = document.querySelector('.js-header__burger')

function openBurger() {
    const burger = document.querySelector('.js-header__burger')
    const nav = document.querySelector('.header__nav');

    burger.classList.toggle(".js-header__burger_opened")
    
    if(burger.classList.contains(".js-header__burger_opened")) {
        burger.innerHTML = "close";
    } else {
        burger.innerHTML = "menu";
    }
    
    nav.style.display = "flex";

    if(!burger.classList.contains(".js-header__burger_opened")) {
        nav.style.display = "";
    }
}

burger.addEventListener('click', openBurger)