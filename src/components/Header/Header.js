import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeDataAction, dataReducer } from '../../store/dataReducer';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Header = () => {

  const dispatch = useDispatch()
  const storeData = useSelector(state => state.dataReducer.storeData.results)
  const [showNavBar, setShowNavBar] = useState(false);

  let result = storeData;
  const handleSearchChange = (e) => {
    if (!e.target.value) { dispatch(changeDataAction(storeData, dataReducer.isSearching = false)) }
    result = storeData.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
  }

  const handleSearch = () => {
    dispatch(changeDataAction(result, dataReducer.isSearching = true))
  }

  const switchShowNavBar = () => {
    setShowNavBar(!showNavBar)
  }

  // document.querySelector('.hidden').addEventListener('click', (event) => {
  //   event.preventDefault();
  //   let target = document.querySelector('.hidden');
  //   if (target.classList.contains('hidden')) {
  //     target.classList.remove('hidden');
  //   } else {
  //     target.classList.add('hidden');
  //   }
  // });

  return (
    <header className='header'>
      <div className='header__title'>
        <Link to="/" className='header__logo'>
          Pokemania
        </Link>
      </div>

      <button onClick={() => switchShowNavBar()} className='switch_show_navbar__button'>=</button>

      <nav className='header__navbar navbar'>
        <ul className={window.screen.width > 768 ? 'navbar__list' : !showNavBar ? 'navbar__list hidden' : 'navbar__list'}>
          <li onClick={() => switchShowNavBar()} className={!showNavBar ? 'navbar__item hidden' : 'navbar__item'}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => switchShowNavBar()} className={!showNavBar ? 'navbar__item hidden' : 'navbar__item'}>
            <Link to="/items">Items</Link>
          </li>
          <li onClick={() => switchShowNavBar()} className={!showNavBar ? 'navbar__item hidden' : 'navbar__item'}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <div className='header__search'>
        <button onClick={() => { handleSearch(); }} className={!showNavBar ? 'search__button hidden' : 'search__button'}>
          Search
        </button>
        <div className={!showNavBar ? 'search__input_form hidden' : 'search__input_form'}>
          <input onChange={handleSearchChange} className='search__input' type='text' placeholder='Search' />
        </div>
      </div>
    </header>
  )
}

export default Header