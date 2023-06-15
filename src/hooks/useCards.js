import React from 'react';
import { fetchCards, shuffleCards } from '../api';
import { useDispatch } from '../store';

const useCards = (cardNumber) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const cards = await fetchCards(cardNumber);
        shuffleCards(cards);
        setData(cards);
        dispatch({ type: 'INIT', cards });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [cardNumber, dispatch]);

  return [data, isLoading, error];
};

export default useCards;
