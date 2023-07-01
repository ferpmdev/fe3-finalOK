import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';

const CardStates = createContext(undefined);

const InitialCardState = {
  cardList: [],
  card: {},
  fav: JSON.parse(localStorage.getItem('fav')) || [],
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, cardList: action.payload };
    case 'ADD_FAV':
      return { ...state, fav: [...state.fav, action.payload] };
    default:
      throw new Error();
  }
};

export const FetchContext = ({ children }) => {
  const [cardState, cardDispatch] = useReducer(cardReducer, InitialCardState);
  const urlList = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlList)
      .then((res) => cardDispatch({ type: 'GET_LIST', payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    localStorage.setItem('fav', JSON.stringify(cardState.fav));
  }, [cardState.fav]);

  return (
    <CardStates.Provider
      value={{
        cardState,
        cardDispatch,
      }}
    >
      {children}
    </CardStates.Provider>
  );
};

export const useCardStates = () => useContext(CardStates);
