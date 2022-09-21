const defaultState = { storeData: null, data: null, dataToRender: null, isLoaded: false };

const FETCH_DATA_FROM_API = "FETCH_DATA_FROM_API"

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_DATA_FROM_API:
            return { ...state, storeData: action.payload, data: action.payload, isLoaded: true }
        default:
            return state
    }
}

export const fetchDataFromApiAction = (payload) => ({ type: FETCH_DATA_FROM_API, payload })