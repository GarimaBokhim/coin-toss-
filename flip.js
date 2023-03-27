const flip_btn = document.querySelector('flip_btn')
const result= document.querySelector('.result')
 
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function flip() {
    const randomNumber = getRandomInt(1,3)

    const answer = randomNumber === 1 ? 'Heads' : 'Tails'
    result.innerHTML = answer
    document.title = answer
}

flip_btn.addEventListener('click', flip)