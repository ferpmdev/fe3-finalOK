import Card from '../Components/Card';
import { useCardStates } from '../Context/FetchContext/fetchContext';
import { useThemeStates } from '../Context/ThemeContext/themeContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { cardState } = useCardStates();
  const { theme } = useThemeStates();

  return (
    <main style={{ background: theme.background, color: theme.font }}>
      <h1>Home</h1>
      <div className="card-grid">
        {cardState.cardList &&
          cardState.cardList.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Home;
