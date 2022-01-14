class Dropdown {
    constructor({anchor, items}) {
        this.anchor = anchor;
        this.name = "";
        this.counter = 0;
        this.createWrapper();
        this.createItem();
        this.addEventListeners();
    }

    createWrapper() {
        const wrapperHTML = '<ul class="dropdown__list"></div>';
        this.anchor.insertAdjacentHTML('afterend', wrapperHTML);
        this.wrapperHTML = this.anchor.parentElement.querySelector('.dropdown__list');
    }
    createItem() {
        const wrapperItemHTML = `
            <li class="dropdown__item">
                <div class="dropdown__target">${this.name}</div>
                <div class="dropdown__counter-btns">
                    <button class="dropdown__btn dropdown__btn-minus">
                    -
                    </button>
                    <span class="dropdown__value">${this.counter}</span>
                    <button class="dropdown__btn dropdown__btn-plus">
                    +
                    </button>
                </div>
            </li>
            `;
        this.wrapperHTML.insertAdjacentHTML('afterbegin', wrapperItemHTML);
    }

    createFuncButtons() {
        const wrapperButtonsHTML = `
                <div class="dropdown__func-buttons"
                    <button class="drodown__clear">
                    Очистить
                    </button>
                    <button class="drodown__apply">
                    Применить
                    </button>
                </div>   
        `
    }

    addEventListeners() {
        document.addEventListener('click', this.toggleDropdown.bind(this));
        this.wrapperHTML.addEventListener('click', function(e) {
            e.stopPropagation();
        });       
    }

    toggleDropdown(e) {
        if (e.target.classList.contains('dropdown')) {
            this.wrapperHTML.classList.toggle('dropdown_active');
            this.anchor.classList.toggle('field__dropdown_active');
        } else {
            this.wrapperHTML.classList.remove('dropdown_active');
            this.anchor.classList.remove('field__dropdown_active');
        }
    }
}

const guest = new Dropdown({anchor: document.querySelector('.dropdown'),
    items: [
        {
        title: 'Младенцы',
        }
    ]});
