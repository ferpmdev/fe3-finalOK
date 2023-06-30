import { Link } from 'react-router-dom';
import { myRoutes } from '../Routes/utilties/myRoutes';
import { useThemeStates } from '../Context/ThemeContext/themeContext';

const Card = ({ item }) => {
  const { theme } = useThemeStates();

  const { name, username, id } = item;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <Link
      className="card"
      to={`${myRoutes.detail}${item.id}`}
      style={{ background: theme.background, color: theme.font }}
    >
      {/* <Link className="card" to={myRoutes.detail}> */}
      <img src="./images/doctor.jpg" alt="" style={{ width: '80px' }} />
      <h1>{name}</h1>
      <h3>{username}</h3>
      <h3>{id}</h3>

      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        onClick={addFav}
        className="favButton"
        style={{ background: theme.background, color: theme.font }}
      >
        Add fav
      </button>
    </Link>
  );
};

export default Card;
