import makeStore from './makeStore';
import reducer from './reducer';

const initialState = {
  cards: [],
  retry: [],
  scoreIncrement: 100,
  score: 0,
  timeoutNoFlip: 2500,
  timeLeft: 100,
  flips: 0,
  delayUnflipPair: 500,
  gameStart: false,
  gameCompleted: false,
  gameOver: false,
  cardNumber: 15,
};

const [useStore, useDispatch, StoreProvider] = makeStore(reducer, initialState);
export { useStore, useDispatch, initialState, StoreProvider };
