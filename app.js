const cardArray = [
    {
        name: "dwight",
        img: "images/dwight.png",
    },
    {
        name: "jake",
        img: "images/jake.png",
    },
    {
        name: "yui",
        img: "images/yui.png",
    },
    {
        name: "meg",
        img: "images/meg.png",
    },
    {
        name: "claudette",
        img: "images/claudette.png",
    },
    {
        name: "david",
        img: "images/david.png",
    },
    {
        name: "dwight",
        img: "images/dwight.png",
    },
    {
        name: "jake",
        img: "images/jake.png",
    },
    {
        name: "yui",
        img: "images/yui.png",
    },
    {
        name: "meg",
        img: "images/meg.png",
    },
    {
        name: "claudette",
        img: "images/claudette.png",
    },
    {
        name: "david",
        img: "images/david.png",
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector("#result")

let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('Check for a match!') 
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert('You have clicked the same card!')
    }
    
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        
    } else {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You found them all!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}