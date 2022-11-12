const defaultState = { storeData: null, data: null, itemCategory: null, itemsToRender: null, isLoaded: false, isSearching: false };

const FETCH_POKEMON_DATA_FROM_API = "FETCH_DATA_FROM_API";
const CHANGE_DATA = "CHANGE_DATA";
const FETCH_ITEMS_CATEGORY_FROM_API = "FETCH_ITEMS_CATEGORY_FROM_API"
const CHANGE_ITEMS_TO_RENDER = "CHANGE_ITEMS_TO_RENDER"


export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_POKEMON_DATA_FROM_API:
            return { ...state, storeData: action.payload, data: action.payload.results }
        case CHANGE_DATA:
            return { ...state, data: action.payload }
        case FETCH_ITEMS_CATEGORY_FROM_API:
            return { ...state, itemCategory: action.payload, isLoaded: true }
        case CHANGE_ITEMS_TO_RENDER:
            return { ...state, itemsToRender: action.payload }
        default:
            return state
    }
}

export const fetchPokemonDataFromApiAction = (payload) => ({ type: FETCH_POKEMON_DATA_FROM_API, payload });
export const changeDataAction = (payload) => ({ type: CHANGE_DATA, payload });
export const fetchItemsDataFromApiAction = (payload) => ({ type: FETCH_ITEMS_CATEGORY_FROM_API, payload })
export const changeItemsToRenderAction = (payload) => ({ type: CHANGE_ITEMS_TO_RENDER, payload })

