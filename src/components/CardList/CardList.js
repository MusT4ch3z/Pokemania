import './CardList.css'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';

const CardList = () => {
  const [data, setData] = useState([], { isLoaded: false });
  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0'
  const fetchData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        return setData(data, data.isLoaded = true);
      })
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log('Card List Data: ', data)

  return (
    <div>
      <div className='card_list'>
        {data.isLoaded === true ? data.results.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} data={data} />) : 'Loading'}
      </div>

      {/* {data.isLoaded === true ? <Card data = {data}/> : 'Loading'} */}

    </div>
  )
}

export default CardList