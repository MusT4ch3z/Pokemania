import { useEffect, useState } from "react";
import image_placeholder from '../../image/Pokeball-Placeholder.png';

const Item = ({ name, url }) => {

   const [info, setInfo] = useState();
   const [showDetails, setShowDetails] = useState(false);
   const [isLoaded, setIsLoaded] = useState(false);

   name = name.replace(/-/g, ' ').replace(/\b[\w]/g, letter => letter.toUpperCase())



   const getInfo = () => {
      fetch(url).then(res => res.json()).then(json => { setInfo(json); setIsLoaded(true) })
   }

   useEffect(() => {
      getInfo()
   }, []);

   const handleShowDetails = () => {
      setShowDetails(!showDetails)
   }
   if (isLoaded) {
      return (
         <div className='item card'>
            <div className='card__title'>
               {name}
            </div>
            <div className='card__body'>
               {!showDetails ? <div className='card__image'>
                  <img style={{ imageRendering: 'pixelated', height: '15rem' }} src={info.sprites.default||image_placeholder} alt={name}></img>
               </div> : 'ITEM DETAILS'}
               <div className='card__body__buttons'>
                  <button onClick={() => handleShowDetails()}>Details</button>
               </div>
            </div>
         </div >
      )
   }
}

export default Item