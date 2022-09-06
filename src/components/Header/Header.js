import './Header.css'

const Header = () => {

  return (
    <header className='header'>
      <div className='header__title'>
        <a href="" className='header__logo'>
          Pokemania
        </a>
      </div>
      <nav className='header__navbar navbar'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href="">Home</a>
          </li>
          <li className='navbar__item'>
            <a href="">Items</a>
          </li>
        </ul>
      </nav>
      <div className='header__search search'>
        <input className='search__input' type='search' placeholder='Search' />
        <button className='search__button'>
          Search
        </button>
      </div>
    </header>
  )
}

export default Header