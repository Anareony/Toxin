console.log("eblan")
let counter = 0;
const dropdown = document.querySelector('.dropdown');
const increment = document.querySelector('.dropdown__increment');
const decrement = document.querySelector('.dropdown__decrement');
const apply = document.querySelector('.dropdown__apply');
const clear = document.querySelector('.dropdown__clear');
const textHolder = document.querySelector(".dropdown__quantity");
const input = document.querySelector('.input');
textHolder.innerHTML = counter;
let variants = ['Эюдей', 'абобусов' , 'амогусов'];

function increase() {
    textHolder.innerHTML = ++counter;
    input.value = counter;

    if (counter >= 1) {
        input.value = `${variants[0]} ${counter} `
    }
    if (counter > 2) {
        input.value = `${variants[1]} ${counter} `
    }
    if (counter > 3) {
        input.value = `${variants[2]} ${counter} `
    }

    if (counter > 0) {
        decrement.disabled = false;
    }
} 

function decrease() {
    textHolder.innerHTML = --counter;
    input.value = counter;
    if (counter >= 1) {
        input.value = `${variants[0]} ${counter} `
    }
    if (counter > 2) {
        input.value = `${variants[1]} ${counter} `
    }
    if (counter > 3) {
        input.value = `${variants[2]} ${counter} `
    }
    
    if (counter === 0) {
        input.value = "нету амогусов"
        decrement.disabled = true;
    }
}

function check() {
    if (counter >= 1) {
        input.value = `${variants[0]} ${counter} `
    }
    if (counter > 2) {
        input.value = `${variants[1]} ${counter} `
    }
    if (counter > 3) {
        input.value = `${variants[2]} ${counter} `
    }
}

function toggleDropdown(event) {
    if (event.target.classList.contains('input')) {
	    dropdown.classList.toggle('show');
    } else {
        dropdown.classList.remove('show');
    }
}

function hide() {
    dropdown.classList.remove('show');
}

function clearCounter() {
    input.value = "нету амогусов";
    counter = 0;
    decrement.disabled = true;
    textHolder.innerHTML = 0;
}

dropdown.addEventListener('click',function(event){
    event.stopPropagation();
})
document.addEventListener("click", toggleDropdown)
increment.addEventListener('click', increase)
decrement.addEventListener('click', decrease)
apply.addEventListener('click', hide)
clear.addEventListener('click', clearCounter)