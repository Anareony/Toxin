class Like {

    constructor({anchor}){
        this.anchor = anchor;
        this.addEventListeners();
    }

    toggle(e) {
        const likeIcon = document.querySelector('.like__icon')
        const likes = document.querySelector('.like')
        const likeCounter = document.querySelector('.like__count')
        const number = parseInt(likeCounter.innerHTML)

        if(e.target.classList.contains('like__checked')) {
            e.target.firstChild.classList.remove('like__icon_checked')
            e.target.classList.remove('like__checked')
            e.target.firstChild.innerHTML = "favorite_border"

            likeCounter.innerHTML = number - 1
        } else {
            e.target.classList.add('like__checked')
            e.target.firstChild.innerHTML = "favorite"
            e.target.firstChild.classList.add('like__icon_checked')

            e.target.innerHTML = number + 1
        }
    }

    addEventListeners() {
        this.anchor.addEventListener('click', this.toggle);
    }
}

export { Like };    


