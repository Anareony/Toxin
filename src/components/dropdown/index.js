class Dropdown {
    constructor({anchor, items}) {
        this.anchor = anchor;
        this.name = "egor";
        this.counter = 0;
        this.createWrapper();
        this.createItem();     
        this.changeAmount();
    }

    createWrapper() {
        const wrapperHTML = '<ul class="dropdown__list"></div>';
        this.anchor.insertAdjacentHTML('afterend', wrapperHTML);
        this.wrapperHTML = this.anchor.parentElement.querySelector('.dropdown__list');
    }
    changeAmount(e) {
    
    
        if (e.target.classList.contains('dropdown__btn dropdown__btn-plus')) {
          this.counter += 1;
        } else {
          desiredItem.amount -= 1;
        }
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
}

const guest = new Dropdown({anchor: document.querySelector('.dropdown'),
    items: [
        {
        title: 'Младенцы',
        }
    ]});
