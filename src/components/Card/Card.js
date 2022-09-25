import { useEffect, useState } from 'react';
import './Card.css'
import pokeball_placeholder from '../../image/Pokeball-Placeholder.png'

const Card = (props, { name = props.name, url = props.url }) => {
  const [info, setInfo] = useState([[], { isLoaded: false }]);
  // console.log(props)
  const getInfo = () => {
    fetch(url).then(res => res.json())
      .then(info => setInfo(info, info.isLoaded = true))
  }

  useEffect(() => {
    getInfo();
  }, []);

  let title = undefined;
  if (info.isLoaded) {
    const [upCase] = name.toUpperCase()
    title = name.replace(name[0], upCase)
  }

  return (
    <div className='card'>
      <div className='card__title'>
        {info.isLoaded === true ? title
          : 'Title is Loading...'}
      </div>
      <div className='card__body'>
        {info.isLoaded === true ?
          <div className='card__image'>
            <img style={{ imageRendering: 'pixelated', height: '15rem' }} src={info.sprites.front_default} alt={name}></img>
          </div>
          : <img src={pokeball_placeholder} />
        }
        <div className='card__body__buttons'>
          <button>Details</button>
          <button>Abilities</button>
        </div>
      </div>
    </div >
  )
}

export default Card