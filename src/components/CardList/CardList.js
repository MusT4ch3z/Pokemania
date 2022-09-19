import './CardList.css'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../../utils/Pagination/Pagination';

const CardList = ({ data = data.result, dataToRender, changeDataToRender }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPageLimit, setItemsPageLimit] = useState(10);


  const changeCurrentPage = (Page) => {
    setCurrentPage(Page)
  }

  const splitItems = () => {
    console.log('items splitted')
    changeDataToRender(data.slice((currentPage * itemsPageLimit) - itemsPageLimit, currentPage * itemsPageLimit), dataToRender.isLoaded = true)
  }

  useEffect(() => {
    // changeDataToRender(dataToRender.isLoaded = true)
    console.log(dataToRender, dataToRender.isLoaded, dataToRender.isSearching)
    splitItems();
  }, [data, currentPage, dataToRender.isSearching]);

  useEffect(() => {
    setCurrentPage(1)
      }, [data.length]);

  if (dataToRender) {
    return (
      <div>
        <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} totalItems={data.length} itemsPageLimit={itemsPageLimit} />
        {/* PageInfo: {currentPage},{itemsPageLimit} */}

        <div className='card_list'>
          {dataToRender.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} data={dataToRender} />)}
        </div>

        <Pagination changeCurrentPage={changeCurrentPage} currentPage={currentPage} totalItems={data.length} itemsPageLimit={itemsPageLimit} />
      </div>
    )
  }
}

export default CardList