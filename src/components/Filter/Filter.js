import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeDataAction } from "../../store/dataReducer";
import './Filter.css'

const Filter = () => {
   // const [filteredData, setFilteredData] = useState([]);
   let filteredData = [];
   const [isLoaded, setIsLoaded] = useState(false);
   const [typesArr, setTypesArr] = useState([]);
   const dispatch = useDispatch();
   const url = 'https://pokeapi.co/api/v2/type/';

   const fetchTypes = () => {
      fetch(url).then(res => res.json())
         .then(json => { setTypesArr(json.results.map(result => result.name)); setIsLoaded(true) })
   }
   useEffect(() => {
      fetchTypes()
   }, []);

   const filterHandle = (type) => {
      console.log('filter handle', url + type); fetch(url + type)
         .then(res => res.json())
         .then(json => { filteredData = []; json.pokemon.map(item => filteredData.push(item.pokemon)); dispatch(changeDataAction(filteredData)) })
   }


   return (
      <div className="query__filter">
         <div className="filter__dropdown dropdown" data-dropdown>
            <button data-dropdown-button>Filter by Type </button>
            {isLoaded ?
               <div className="dropdown_menu">
                  <ul>
                     {typesArr.map(type => <li onClick={() => filterHandle(type)} key={type}>{type}</li>)}
                  </ul>
               </div>
               : undefined}
         </div>
      </div>
   )

}

export default Filter