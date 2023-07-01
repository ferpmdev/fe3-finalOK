import Card from '../Components/Card';
import { useFavState } from '../Context/FavsContext/FavContex';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { theme } = useThemeStates();
  const { favsState } = useFavState();

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsState.favs &&
          favsState.favs.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              {/* <Card item={item} /> */}
            </div>
          ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
