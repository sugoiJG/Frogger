const timeLeftDisplay = document.querySelector('#time-left')

const resultDisplay = document.querySelector('#result')

const startPauseButton = document.querySelector('#start-pause-button')

const squares = document.querySelector('.grid div')

const moveFrog = () => {
    console.log('moved')

}

document.addEventListener('keyup', moveFrog)