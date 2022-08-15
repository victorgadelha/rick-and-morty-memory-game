const grid = document.querySelector('.grid')

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

const creatCard = (character) => {

    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url('../images/${character}.png')`

    card.appendChild(front)
    card.appendChild(back)

    return card
}

const loadGame = () => {
    const duplicateCharacters = [ ...characters, ...characters]

    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5 )

    shuffledArray.forEach((character) => {
        const card = creatCard(character)
        grid.appendChild(card)
    })

    
}

loadGame()