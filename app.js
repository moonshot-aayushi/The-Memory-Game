document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
   {
		name: 'arrow',
		img: 'images/arrow.png'
	},
	{
		name: 'arrow',
		img: 'images/arrow.png'
	},
	{
		name: 'captain',
		img: 'images/captain.png'
	},
	{
		name: 'captain',
		img: 'images/captain.png'
	},
	{
		name: 'drax',
		img: 'images/drax.png'
	},
	{
		name: 'drax',
		img: 'images/drax.png'
	},
	{
		name: 'fury',
		img: 'images/fury.png'
	},
	{
		name: 'fury',
		img: 'images/fury.png'
	},
	{
		name: 'gamora',
		img: 'images/gamora.png'
	},
	{
		name: 'gamora',
		img: 'images/gamora.png'
	},
	{
		name: 'groot',
		img: 'images/groot.png'
	},
		{
		name: 'groot',
		img: 'images/groot.png'
	},
	{
		name: 'hulk',
		img: 'images/hulk.png'
	},
	{
		name: 'hulk',
		img: 'images/hulk.png'
	},
	{
		name: 'ironman',
		img: 'images/ironman.png'
	},
	{
		name: 'ironman',
		img: 'images/ironman.png'
	},
	{
		name: 'loki',
		img: 'images/loki.png'
	},
	{
		name: 'loki',
		img: 'images/loki.png'
	},
	{
		name: 'mantis',
		img: 'images/mantis.png'
	},

	{
		name: 'mantis',
		img: 'images/mantis.png'
	},
	{
		name: 'spidey',
		img: 'images/spidey.png'
	},
	{
		name: 'spidey',
		img: 'images/spidey.png'
	},
	{
		name: 'strange',
		img: 'images/strange.png'
	},
	{
		name: 'strange',
		img: 'images/strange.png'
	},
	{
		name: 'thor',
		img: 'images/thor.png'
	},
	{
		name: 'thor',
		img: 'images/thor.png'
	},
	{
		name: 'vision',
		img: 'images/vision.png'
	},
	{
		name: 'vision',
		img: 'images/vision.png'
	},
	{
		name: 'witch',
		img: 'images/witch.png'
	},
	{
		name: 'witch',
		img: 'images/witch.png'
	},
	{
		name: 'racoon',
		img: 'images/racoon.png'
	},
	{
		name: 'racoon',
		img: 'images/racoon.png'
	}
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  const cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images/planet.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/planet.png')
      cards[optionTwoId].setAttribute('src', 'images/planet.png')
      alert('OOPS! Try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = `You found all ${cardsWon.length} cards.    Congratulations!	`
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard()
})
















