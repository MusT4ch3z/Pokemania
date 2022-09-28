const defaultState = { currentPage: 1, itemsPageLimit: 10 };

const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE"
const CHANGE_ITEMS_PAGE_LIMIT = "CHANGE_ITEMS_PAGE_LIMIT"

export const paginationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        case CHANGE_ITEMS_PAGE_LIMIT:
            return { ...state, itemsPageLimit: action.payload }
        default:
            return state
    }
}

export const changeCurrentPageAction = (payload) => ({ type: CHANGE_CURRENT_PAGE, payload })
export const changeItemsPageLimitAction = (payload) => ({ type: CHANGE_ITEMS_PAGE_LIMIT, payload })