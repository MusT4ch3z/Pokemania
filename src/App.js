import './App.css';
import Header from './components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemonDataFromApi } from './utils/FetchData/FetchData';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { fetchItemsDataFromApi } from './utils/FetchData/FetchData';
import ItemsPage from './components/ItemsPage/ItemsPage';
import AboutPage from './components/AboutPage/AboutPage';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => { dispatch(fetchPokemonDataFromApi()) })();
    (() => { dispatch(fetchItemsDataFromApi()) })()
  }, []);

  const isDataFetched = useSelector(state => state.dataReducer.isLoaded)

  if (isDataFetched) {
    return (
      <BrowserRouter>
        <div className="app">
          {/* <div className="dark_background"/> */}
          <div className="wrapper">
            <Header />
            <div className="_container">
              <Routes>
                <Route path="/" element={<HomePage />}>
                  <Route path="?sort={sort}" />
                </Route>
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;