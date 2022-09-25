const defaultState = { storeData: null, data: null, dataToRender: null, isLoaded: false, isSearching: false };

const FETCH_DATA_FROM_API = "FETCH_DATA_FROM_API";
const CHANGE_DATA_TO_RENDER = "CHANGE_DATA_TO_RENDER";
const CHANGE_DATA = "CHANGE_DATA";

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_FROM_API:
            return { ...state, storeData: action.payload, data: action.payload.results, isLoaded: true }
        case CHANGE_DATA:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export const fetchDataFromApiAction = (payload) => ({ type: FETCH_DATA_FROM_API, payload });
export const changeDataAction = (payload) => ({ type: CHANGE_DATA, payload });
export const changeDataToRenderAction = (payload) => ({ type: CHANGE_DATA_TO_RENDER, payload });
