
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cards = []



let player = {
    name: "Per",
    chips: 200,

}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    let random = Math.floor(Math.random() * 13)+1;
    if (random === 1){
        console.log("changed to 11")
        random = 11
        return random
    }
    if (random > 10){
        console.log("changed to 10")
        random = 10 
        return random
    }
    else{

        return random
    }
    
}

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
console.log(messageEl)

function startGame(){
    cards = []
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
   
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){

        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}



function newCard() {
    if ( isAlive == true && sum < 21 ){
        console.log("Drawing a new card from the deck")
        let card = getRandomCard()
        cards.push(card);
        console.log(cards)

        sum += card
        renderGame()
    }
    else {
        console.log("you lost")
    }
}


let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}


