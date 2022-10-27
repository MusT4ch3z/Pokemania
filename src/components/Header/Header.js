import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataAction, dataReducer } from '../../store/dataReducer';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

  const dispatch = useDispatch()
  const storeData = useSelector(state => state.dataReducer.storeData.results)
  const [showSearchInput, setShowSearchInput] = useState(false);

  let result = storeData;
  const handleSearchChange = (e) => {
    if (!e.target.value) { dispatch(changeDataAction(storeData, dataReducer.isSearching = false)) }
    result = storeData.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
  }

  const handleSearch = () => {
    dispatch(changeDataAction(result, dataReducer.isSearching = true))
  }

  const switchShowSearchInput = () => {
    setShowSearchInput(!showSearchInput)
  }

  return (
    <header className='header'>
      <div className='header__title'>
        <Link to="/" className='header__logo'>
          Pokemania
        </Link>
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
        {window.innerWidth > 630 ? <div>
          <input onChange={handleSearchChange} className={'search__input'} type='text' placeholder='Search' />
          <button onClick={() => handleSearch()} className='search__button'>
            Search
          </button>
        </div>
          : <div className='search__dropdown dropdown' data-dropdown>
            <button onClick={() => { handleSearch(); switchShowSearchInput() }} className='search__button' data-dropdown-button>
              Search
            </button>
            {<div className='dropdown__input'>
              <input onChange={handleSearchChange} className={'search__input'} type='text' placeholder='Search' />
            </div>
            }
          </div>}
      </div>
    </header>
  )
}

export default Header