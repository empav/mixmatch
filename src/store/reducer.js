const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      const newState = { ...state, cards: [...action.cards] };
      return newState;
    }
    case 'GAME_OVER': {
      return { ...state, gameStart: true, gameOver: true };
    }
    case 'GAME_START': {
      return action.state
        ? { ...action.state, gameStart: true, gameOver: false }
        : { ...state, gameStart: true };
    }
    case 'FLIP_CARD': {
      const newState = { ...state };
      flipCards([action.card], newState);
      newState.cardToCheck = newState.cardToCheck
        ? newState.cardToCheck
        : { ...action.card, visible: !action.card.visible };
      return newState;
    }

    case 'NO_FLIP': {
      const newState = {
        ...state,
        flips: state.flips + 1,
      };
      newState.cardToCheck.visible = action.card.visible = true;
      flipCards([newState.cardToCheck, action.card], newState);
      delete newState.cardToCheck;
      return newState;
    }

    case 'CHECK_CARDS': {
      const newState = {
        ...state,
        flips: state.flips + 1,
      };
      if (state.cardToCheck.name === action.card.name) {
        newState.score += newState.scoreIncrement;
        newState.gameCompleted =
          newState.cards.filter((card) => !card.visible).length === 0;
      } else {
        newState.cardToCheck.visible = action.card.visible = true;
        flipCards([newState.cardToCheck, action.card], newState);
      }
      delete newState.cardToCheck;
      return newState;
    }
    default:
      return state;
  }
};

const flipCards = (cards, state) => {
  for (let card of cards) {
    const idx = state.cards.findIndex((c) => c.id === card.id);
    state.cards.splice(idx, 1, {
      ...card,
      visible: !card.visible,
    });
  }
};

export default reducer;
