import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDataAction } from "../../store/dataReducer";
import './Filter.css'

const Filter = () => {
   const [filter, setFilter] = useState('Default');
   const data = useSelector(state => state.dataReducer.data)
   const [isLoaded, setIsLoaded] = useState(false);
   const [typesArr, setTypesArr] = useState([]);
   const filteredData = [];
   const dispatch = useDispatch();
   const url = 'https://pokeapi.co/api/v2/type/';

   const fetchTypes = () => {
      fetch(url).then(res => res.json())
         .then(json => { setTypesArr(json.results.map(result => result.name)); setIsLoaded(true) })
   }
   useEffect(() => {
      fetchTypes()
   }, []);


   // const fetchFilteredData = (type) => {
   //    fetch(url + type).then(res => res.json().then(json => dispatch(changeDataAction(json))))
   // }
   // useEffect(() => {
   //    fetchFilteredData()

   // }, []);


   const filterHandle = (type) => {
      console.log('filter handle', url + type); fetch(url + type)
         .then(res => res.json())
         .then(json => { json.pokemon.map(item => filteredData.push(item.pokemon)); dispatch(changeDataAction(filteredData)) })
   }


   if (isLoaded) {
      return (
         <div className="query__filter">
            <div className="filter__dropdown dropdown" data-dropdown>
               <button data-dropdown-button>Filter by Type </button>
               <div className="dropdown_menu">
                  <ul>
                     {typesArr.map(type => <li onClick={() => filterHandle(type)} key={type}>{type}</li>)}
                  </ul>
               </div>
            </div>
         </div>
      )
   }
}

export default Filter