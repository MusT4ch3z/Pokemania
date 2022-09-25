import { createStore,combineReducers, applyMiddleware } from "redux";
import { dataReducer } from "./dataReducer";
import { paginationReducer } from "./paginationReducer";
import { queryParamsReducer } from "./queryParamsReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    dataReducer,
    paginationReducer,
    queryParamsReducer
})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))