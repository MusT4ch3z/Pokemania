const defaultState = { sort: 'defualt', filter: '' }

const SWITCH_TO_AB_SORT = "SWITCH_TO_AB_SORT"
const SWITCH_TO_BA_SORT = "SWITCH_TO_BA_SORT"
const SWITCH_TO_DEFAULT_SORT = "SWITCH_TO_DEFAULT_SORT"

export const queryParamsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_TO_AB_SORT:
            return { ...state, sort: "ab" }
        case SWITCH_TO_BA_SORT:
            return { ...state, sort: "ba" }
        case SWITCH_TO_DEFAULT_SORT:
            return { ...state, sort: "default" }
        default:
            return state
    }
}

export const switchToAbSortAction = () => ({ type: SWITCH_TO_AB_SORT })
export const switchToBaSortAction = () => ({ type: SWITCH_TO_BA_SORT })
export const switchToDefaultSortAction = () => ({ type: SWITCH_TO_DEFAULT_SORT })