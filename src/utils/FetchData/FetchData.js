import { fetchPokemonDataFromApiAction } from "../../store/dataReducer"
import { fetchItemsDataFromApiAction } from "../../store/dataReducer"

export const fetchPokemonDataFromApi = () => {
  return dispatch => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=904&offset=0'
    fetch(url).then((res) => res.json())
      .then(json => dispatch(fetchPokemonDataFromApiAction(json))
      )
  }
}

export const fetchItemsDataFromApi = () => {
  return dispatch => {
    const url = 'https://pokeapi.co/api/v2/item-category?limit=45'
    fetch(url).then((res) => res.json())
      .then(json => dispatch(fetchItemsDataFromApiAction(json))
      )
  }
}