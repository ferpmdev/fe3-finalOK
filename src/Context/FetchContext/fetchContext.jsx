import axios from 'axios';
import { useReducer } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

const PokeStates = createContext();

export const themes = {
  light: {
    font: 'black',
    background: 'white',
  },
  dark: {
    font: 'white',
    background: 'black',
  },
};

const InitialPokeState = {
  pokeList: [],
  pokemon: {},
};

const pokeReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { pokeList: action.payload, pokemon: state.pokemon };
    case 'GET_POKE':
      return { pokeList: state.pokeList, pokemon: action.payload };
    default:
      throw new Error();
  }
};

const Context = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light);
    if (theme === themes.light) setTheme(themes.dark);
  };
  const [pokeState, pokeDispatch] = useReducer(pokeReducer, InitialPokeState);
  const urlList = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlList)
      .then((res) =>
        pokeDispatch({ type: 'GET_LIST', payload: res.data.results })
      )
      .catch((err) => console.log(err));
  }, []);

  console.log(pokeState);
  return (
    <PokeStates.Provider
      value={{
        pokeState,
        pokeDispatch,
        theme,
        handleChangeTheme,
      }}
    >
      {children}
    </PokeStates.Provider>
  );
};
export default Context;

export const usePokeStates = () => useContext(PokeStates);
