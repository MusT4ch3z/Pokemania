import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import FetchData from './utils/FetchData/FetchData';




function App() {

  const [data, setData] = useState([], { isLoaded: false });
  const [dataToRender, setDataToRender] = useState();

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=3000&offset=0'
  const fetchData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        setData(data, data.isLoaded = true)
        return data
      })
      .then(data => {
        setDataToRender(data);
      })
  }

  useEffect(() => {
    fetchData()
  }, [data.isLoaded]);

  useEffect(() => {
    console.log('data is', data,'data to render', dataToRender)
  }, [dataToRender]);

  const changeDataToRender = (searchResult) => {
    setDataToRender(searchResult)
  }

  return (
    <div className="app">
      <div className="wrapper">
        <div className="_container">
          {/* <FetchData /> */}
          <Header data={data} changeDataToRender={changeDataToRender}/>
          <CardList dataToRender={dataToRender}/>
        </div>
      </div>
    </div>
  );
}

export default App;