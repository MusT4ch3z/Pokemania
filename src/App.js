import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './utils/FetchData/FetchData';
import Sort from './components/Sort/Sort';
import { useEffect } from 'react';
import Filter from './components/Filter/Filter';
import Reset from './components/Reset/Reset';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    (() => { dispatch(fetchDataFromApi()) })()
  }, []);

  const isDataFetched = useSelector(state => state.dataReducer.isLoaded)



  if (isDataFetched) {
    return (
      <div className="app">
        {/* <div className="dark_background"/> */}
        <div className="wrapper">
          <div className="_container">
            {/* <div className="dark_background"> */}
              <Header />
              <div className='row'>
                <Sort />
                <Filter />
                <Reset />
              </div>
            {/* </div> */}
            <CardList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;