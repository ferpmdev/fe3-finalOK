import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Layout from './Layout/Layout';
import Favs from './Routes/Favs';
import { myRoutes } from './Routes/utilties/myRoutes';
import FetchContext from './Context/FetchContext/fetchContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ThemeContext from './Context/ThemeContext/themeContext';

function App() {
  return (
    <FetchContext>
      <ThemeContext>
        <Layout>
          <Navbar />
          <Routes>
            <Route path={myRoutes.home} element={<Home />} />
            <Route path={myRoutes.contact} element={<Contact />} />
            <Route path={`${myRoutes.detail}:id`} element={<Detail />} />
            <Route path={myRoutes.favs} element={<Favs />} />
            {/* <Route path={myRoutes.pageNotFound} element={<PageNotFound />} /> */}
          </Routes>
        </Layout>
        <Footer />
      </ThemeContext>
    </FetchContext>
  );
}

export default App;
