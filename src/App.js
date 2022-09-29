import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './utils/FetchData/FetchData';
import Sort from './components/Sort/Sort';
import { useEffect } from 'react';
import Filter from './components/Filter/Filter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => { dispatch(fetchDataFromApi()) })()
  }, []);

  const isDataFetched = useSelector(state => state.dataReducer.isLoaded)



  if (isDataFetched) {
    return (
      <div className="app">
        <div className="wrapper">
          <div className="_container">
            <Header />
            <div className='row'>
              <Sort />
              <Filter />
            </div>
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;