class Like {

    constructor(){
        this.addEventListeners();
    };

    toggle(e) {

        e.preventDefault();

        const number = parseInt(e.currentTarget.lastChild.innerHTML);

        e.currentTarget.classList.toggle('like__checked');

        if(e.currentTarget.classList.contains('like__checked')) {
            e.currentTarget.firstChild.innerHTML = "favorite";
            e.currentTarget.lastChild.innerHTML = number + 1;
        } else {
            e.currentTarget.firstChild.innerHTML = "favorite_border";
            e.currentTarget.lastChild.innerHTML = number - 1;
        }; 
    };

    addEventListeners() {
        document.querySelectorAll('.like').forEach( item => item.addEventListener('click', this.toggle.bind(this)));
    };
};
 const like = new Like();



