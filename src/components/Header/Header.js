import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataAction, dataReducer } from '../../store/dataReducer';
import { Link } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch()
  const storeData = useSelector(state => state.dataReducer.storeData.results)

  let result = undefined;
  const handleSearchChange = (e) => {
    if (!e.target.value) { dispatch(changeDataAction(storeData, dataReducer.isSearching = false)) }
    result = storeData.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
  }

  const handleSearch = () => {
    dispatch(changeDataAction(result, dataReducer.isSearching = true))
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
            <Link to="/">Home</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/items">Items</Link>
          </li>
          <li className='navbar__item'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className='header__search search'>
        <input onChange={handleSearchChange} className='search__input' type='text' placeholder='Search' />
        <button onClick={handleSearch} className='search__button'>
          Search
        </button>
      </div>
    </header>
  )
}

export default Header