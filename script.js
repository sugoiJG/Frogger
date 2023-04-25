const timeLeftDisplay = document.querySelector('#time-left')

const resultDisplay = document.querySelector('#result')

const startPauseButton = document.querySelector('#start-pause-button')

const squares = document.querySelector('.grid div')

let currentIndex = 0

const moveFrog = () => {
    console.log('moved')

    squares[currentIndex].classList.add('frog')

}

document.addEventListener('keyup', moveFrog)