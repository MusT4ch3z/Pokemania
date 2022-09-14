import './CardList.css'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../../utils/Pagination/Pagination';

const CardList = ({dataToRender}) => {
  const [data, setData] = useState([], { isLoaded: false });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);


  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=' + pageLimit + '&offset=' + (currentPage - 1) * pageLimit
  
  const changeCurrentPage = (Page) => {
    setCurrentPage(Page)
  }

  const fetchPaginationData = () => {
    fetch(url).then((res) => res.json())
      .then((data) => {
        setData(data, data.isLoaded = true);
      })
  }

  useEffect(() => {
    fetchPaginationData();
  }, [currentPage]);
  // console.log('Card List Data: ', data)

  if (data.isLoaded === true) {
    return (
      <div>
        <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} totalItems={data.count} itemsLimit={pageLimit} />
        {/* PageInfo: {currentPage},{pageLimit} */}

        <div className='card_list'>
          {data.isLoaded === true ? data.results.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} data={data} />) : 'Loading'}
        </div>

        {/* {data.isLoaded === true ? <Card data = {data}/> : 'Loading'} */}
        <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} totalItems={data.count} itemsLimit={pageLimit} />
      </div>
    )
  }
}

export default CardList