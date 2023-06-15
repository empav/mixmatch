const fetchCards = async (cardNumber) => {
  const pcards = await Promise.all(
    [...Array(cardNumber).keys()].map((card) => {
      return import(`../assets/cards/${card + 1}.svg`);
    })
  );

  const cards = [];

  for (let i = 0; i < pcards.length; i++) {
    const card = pcards[i];
    const cardId = i + 1;
    cards.push({
      ...card,
      name: `${cardId}.svg`,
      id: cardId,
      visible: false,
    });
    cards.push({
      ...card,
      name: `${cardId}.svg`,
      id: pcards.length + cardId,
      visible: false,
    });
  }

  return cards;
};

const shuffleCards = (cards) => {
  let currentIndex = cards.length;
  let temp = currentIndex;

  while (currentIndex > 0) {
    const randomIdx = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = cards[currentIndex];
    cards[currentIndex] = cards[randomIdx];
    cards[randomIdx] = temp;
  }
};

export { fetchCards, shuffleCards };
