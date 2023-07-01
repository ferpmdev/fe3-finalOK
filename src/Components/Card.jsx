import { Link } from 'react-router-dom';
import { myRoutes } from '../Routes/utilties/myRoutes';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { useFavState } from '../Context/FavsContext/FavContex';

const Card = ({ item }) => {
  const { theme } = useThemeStates();
  const { favsState, favsDispatch } = useFavState();

  const { name, username, id } = item;

  const addFav = () => {
    const findFav = favsState.favs.find((favs) => favs.id === item.id);
    if (!findFav) {
      favsDispatch({ type: 'ADD_FAV', payload: item });
    } else {
      alert('Ya está agregado');
    }
  };

  return (
    <div className="card">
      <Link
        to={`${myRoutes.detail}${item.id}`}
        style={{ background: theme.background, color: theme.font }}
      >
        <img src="./images/doctor.jpg" alt="" style={{ width: '80px' }} />
        <h1>{name}</h1>
        <h3>{username}</h3>
        <h3>{id}</h3>
      </Link>
      <button
        onClick={addFav}
        className="favButton"
        style={{ background: theme.background, color: theme.font }}
      >
        Add fav
      </button>
    </div>
  );
};

export default Card;
