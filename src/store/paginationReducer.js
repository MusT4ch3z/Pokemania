const defaultState = { currentPage: 1, itemsPageLimit: 10 };

const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"

export const paginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.payload}
        default:
            return state
    }
}

export const changeCurrentPageAction = (payload) => ({ type: CHANGE_CURRENT_PAGE, payload })