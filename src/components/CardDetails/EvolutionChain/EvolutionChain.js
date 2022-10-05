import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './EvolutionChain.css'
import EvolutionChainItem from "./EvolutionChainItem/EvolutionChainItem";

const EvolutionChain = ({ info }) => {

   const storeData = useSelector(state => state.dataReducer.storeData)
   const [isLoaded, setIsLoaded] = useState(false);
   const [evolutionChainUrl, setEvolutionChainUrl] = useState({ isLoaded: false });
   const [evolutionChainPokemons, setEvolutionChainPokemons] = useState([]);

   const fetchEvolutionChainUrl = () => {
      const pokemonSpeciesUrl = info.species.url
      fetch(pokemonSpeciesUrl).then(res => res.json()).then(json => { setEvolutionChainUrl(json.evolution_chain.url); console.log(json.evolution_chain.url, 'json url'); })
         .catch(err => { console.error('Request failed first fetch', err) })

   }

   const fetchEvolutionChain = () => {
      fetch(evolutionChainUrl).then(res => res.json()).then(json => { evolutionChainPokemons.push(json.chain.species.name); if (json.chain.evolves_to.length === 1) { console.log('second floor'); evolutionChainPokemons.push(json.chain.evolves_to[0].species.name); if (json.chain.evolves_to[0].evolves_to.length === 1) { console.log('third floor'); evolutionChainPokemons.push(json.chain.evolves_to[0].evolves_to[0].species.name) } } })
         .then(() => setIsLoaded(true))
         .catch(err => { console.error('Request failed second fetch', err) })
   }

   useEffect(() => {
      fetchEvolutionChainUrl()

   }, []);

   useEffect(() => {
      if (evolutionChainUrl.length > 1)
         fetchEvolutionChain()
   }, [evolutionChainUrl]);

   if (isLoaded) {
      console.log(evolutionChainPokemons)

      return (
         <div className="card_details__evo_chain evo_chain">
            <table>
               <thead>
                  <tr>
                     <th>Evolution Chain</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td >
                        <div className="space_between row">
                           {evolutionChainPokemons.map(pokemonName => <EvolutionChainItem pokemonName={pokemonName} key={pokemonName} />)}
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
            {/* <div className='evo_chain__title'>Evolution Chain</div>
            <div>
               {evolutionChainPokemons.map(pokemonName => <EvolutionChainItem pokemonName={pokemonName} key={pokemonName} />)}

            </div> */}
         </div>
      )
   }
}

export default EvolutionChain