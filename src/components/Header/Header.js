import { useState, useEffect } from 'react';
import './Header.css'
import { fetchDataFromApi } from '../../utils/FetchData/FetchData';
import { useDispatch } from 'react-redux';


const Header = ({ fetchedData, data, changeData, dataToRender, changeDataToRender }) => {

  const dispatch = useDispatch()

  const handleSearchChange = (e) => {
    if (!e.target.value) { changeData(fetchedData); changeDataToRender(data.slice(0, 10)) }
    let result = fetchedData.results.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
    changeData(result, result.isSearching = true)
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