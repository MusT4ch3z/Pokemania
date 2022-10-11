import { fetchDataFromApiAction } from "../../store/dataReducer"

export const fetchDataFromApi = () => {
  return dispatch => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=904&offset=0'
    fetch(url).then((res) => res.json())
      .then(json => dispatch(fetchDataFromApiAction(json))
      )
  }
}