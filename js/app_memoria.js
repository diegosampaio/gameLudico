const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let totalJogadas = 0;
let totalAcertos = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {

  if (firstCard.dataset.objeto === secondCard.dataset.objeto) {
    totalAcertos += 1;
    if (totalJogadas === totalAcertos) {
      setTimeout(function(){
        alert('Parabéns! Você venceu!');
        window.location.reload();
      }, 900);
    }
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  console.log('total acertos: ', totalAcertos);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500)
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
  totalJogadas = (cards.length / 2);
  console.log('total de jogadas: ', totalJogadas);
})();

cards.forEach(card => card.addEventListener('click', flipCard));