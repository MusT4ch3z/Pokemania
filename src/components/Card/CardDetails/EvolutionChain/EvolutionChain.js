import { useState, useEffect } from "react";
import './EvolutionChain.css'
import EvolutionChainItem from "./EvolutionChainItem/EvolutionChainItem";

const EvolutionChain = ({ info }) => {

   const [isLoaded, setIsLoaded] = useState(false);
   const [evolutionChainUrl, setEvolutionChainUrl] = useState({ isLoaded: false });
   const [evolutionChainPokemons, setEvolutionChainPokemons] = useState([]);

   const fetchEvolutionChainUrl = () => {
      const pokemonSpeciesUrl = info.species.url
      fetch(pokemonSpeciesUrl).then(res => res.json()).then(json => { setEvolutionChainUrl(json.evolution_chain.url) })
         .catch(err => { console.error('Request failed first fetch', err) })

   }

   const fetchEvolutionChain = () => {
      fetch(evolutionChainUrl).then(res => res.json()).then(json => { evolutionChainPokemons.push(json.chain.species.name); if (json.chain.evolves_to.length === 1) { evolutionChainPokemons.push(json.chain.evolves_to[0].species.name); if (json.chain.evolves_to[0].evolves_to.length === 1) { evolutionChainPokemons.push(json.chain.evolves_to[0].evolves_to[0].species.name) } } })
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
         </div>
      )
   }
}

export default EvolutionChain