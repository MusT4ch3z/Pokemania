import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import FetchData from './utils/FetchData/FetchData';




function App() {

  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [dataToRender, setDataToRender] = useState([{ isSearching: false }]);

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0'
  const fetchData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        setFetchedData(data, data.isLoaded = true)
        setData(data.results, data.isLoaded = true)
      })
  }


  useEffect(() => {
    fetchData()
  }, [data.isLoaded]);

  useEffect(() => {
    console.log('data is', data, 'data to render', dataToRender)
  }, [dataToRender, data]);

  const changeDataToRender = (args) => {
    setDataToRender(args)
  }

  const changeData = (args) => {
    setData(args)
  }

  return (
    <div className="app">
      <div className="wrapper">
        <div className="_container">
          {/* <FetchData /> */}
          <Header fetchedData={fetchedData} data={data} changeData={changeData} changeDataToRender={changeDataToRender} dataToRender={dataToRender} />
          <CardList data={data} changeData={changeData} changeDataToRender={changeDataToRender} dataToRender={dataToRender} />
        </div>
      </div>
    </div>
  );
}

export default App;