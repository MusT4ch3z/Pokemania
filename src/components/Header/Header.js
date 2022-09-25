import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataAction, dataReducer } from '../../store/dataReducer';

const Header = () => {

  const dispatch = useDispatch()
  const storeData = useSelector(state => state.dataReducer.storeData.results)
  // const data = useSelector(state => state.dataReducer.data)

  const handleSearchChange = (e) => {
    if (!e.target.value) { dispatch(changeDataAction(storeData,dataReducer.isSearching = false)) }
    let result = storeData.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
    dispatch(changeDataAction(result, dataReducer.isSearching = true))
  }

  const handleSearch = (result) => {

  }


  return (
    <header className='header'>
      <div className='header__title'>
        <a href="#logo" className='header__logo'>
          Pokemania
        </a>
      </div>
      <nav className='header__navbar navbar'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href="#home">Home</a>
          </li>
          <li className='navbar__item'>
            <a href="#items">Items</a>
          </li>
        </ul>
      </nav>
      <div className='header__search search'>
        <input onChange={handleSearchChange} className='search__input' type='text' placeholder='Search' />
        <button /*onClick={}*/ className='search__button'> 
          Search
        </button>
      </div>
    </header>
  )
}

export default Header