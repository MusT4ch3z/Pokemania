import { useState, useEffect } from 'react';
import './Ability.css'

const Ability = ({ url }) => {

   const [isLoaded, setIsLoaded] = useState(false);
   const [shortAbility, setShortAbility] = useState();
   const [ability, setAbility] = useState();
   const [showMoreInfo, setShowMoreInfo] = useState(false);
   const [buttonText, setButtonText] = useState('More');
   const fetchAbility = () => {
      fetch(url)
         .then(res => res.json())
         .then(json => {
            const result = json.effect_entries.filter(effect => effect.language.name === 'en')
            setShortAbility(result[0].short_effect)
            setAbility(result[0].effect)
            setIsLoaded(true)
         })
   }

   const handleMoreInfo = () => {
      setShowMoreInfo(!showMoreInfo)
      buttonText === 'More' ? setButtonText('Close') : setButtonText('More')
   }

   useEffect(() => {
      fetchAbility()
   }, []);

   if (isLoaded) {
      return (
         <div className="ability__body">
            {!showMoreInfo ? shortAbility : ability}
            <button onClick={handleMoreInfo} className='ability__button'>{buttonText}</button>
         </div>
      )
   }
}

export default Ability