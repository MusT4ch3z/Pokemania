import './CardList.css'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Pagination from '../../utils/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPageAction } from '../../store/paginationReducer';


const CardList = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.paginationReducer.currentPage)
  const itemsPageLimit = useSelector(state => state.paginationReducer.itemsPageLimit)
  const data = useSelector(state => state.dataReducer.data)
  const isDataFetched = useSelector(state => state.dataReducer.isLoaded)
  const sortType = useSelector(state => state.queryParamsReducer.sort)
  const [dataToRender, setDataToRender] = useState([]);

  const splitItems = () => {
    console.log('items splitted')
    setDataToRender(data.slice((currentPage * itemsPageLimit) - itemsPageLimit, currentPage * itemsPageLimit))
  }

  useEffect(() => {
    splitItems();
  }, [data.length, currentPage, sortType, itemsPageLimit]);

  useEffect(() => {
    dispatch(changeCurrentPageAction(1))
  }, [data.length]);

  if (isDataFetched) {
    return (
      <div>
        <Pagination />
        {/* PageInfo: {currentPage},{itemsPageLimit} */}
        {/* <CardDetails /> */}
        <div className='card_list'>
          {dataToRender.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} data={dataToRender} />)}
        </div>

        <Pagination />
      </div>
    )
  }
}

export default CardList