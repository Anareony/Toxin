const like = document.querySelectorAll('.like')

function addLike() {

    const likeIcon = document.querySelector('.like__icon')
    const likes = document.querySelector('.like')
    const likeCounter = document.querySelector('.like__count')
    const number = parseInt(likeCounter.innerHTML)

    likes.classList.toggle('like__checked')
    likeIcon.classList.toggle('like__icon_checked')

    if(likes.classList.contains('like__checked')) {
        likeIcon.innerHTML = "favorite"
        likeCounter.innerHTML = number + 1
    } else {
        likeIcon.innerHTML = "favorite_border"
        likeCounter.innerHTML = number - 1
    }
}

like.forEach(item => item.addEventListener('click', addLike))

