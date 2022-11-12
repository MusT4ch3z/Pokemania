const defaultState = { sort: 'default', filter: 'default' }

const SWITCH_TO_AB_SORT = "SWITCH_TO_AB_SORT"
const SWITCH_TO_BA_SORT = "SWITCH_TO_BA_SORT"
const SWITCH_TO_DEFAULT_SORT = "SWITCH_TO_DEFAULT_SORT"
const CHANGE_FILTER = "CHANGE_FILTER"

export const queryParamsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_TO_AB_SORT:
            return { ...state, sort: "ab" }
        case SWITCH_TO_BA_SORT:
            return { ...state, sort: "ba" }
        case SWITCH_TO_DEFAULT_SORT:
            return { ...state, sort: "default" }
        case CHANGE_FILTER:
            return { ...state, filter: action.payload }
        default:
            return state
    }
}

export const switchToAbSortAction = () => ({ type: SWITCH_TO_AB_SORT })
export const switchToBaSortAction = () => ({ type: SWITCH_TO_BA_SORT })
export const switchToDefaultSortAction = () => ({ type: SWITCH_TO_DEFAULT_SORT })
export const changeFilterAction = (payload) => ({ type: CHANGE_FILTER, payload })