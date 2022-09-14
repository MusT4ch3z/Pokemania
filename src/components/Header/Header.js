import { useState, useEffect } from 'react';
import './Header.css'


const Header = ({ data, changeDataToRender }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleSearchChange = (e) => {
    if (!e.target.value) return changeDataToRender(data)
    let result = data.results.filter(pokemon => pokemon.name.includes(e.target.value.toLowerCase()))
    changeDataToRender(result)
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
        <button onSubmit={handleSubmit} className='search__button'>
          Search
        </button>
      </div>
    </header>
  )
}

export default Header