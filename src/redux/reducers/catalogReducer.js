const initialState = {
    books: [],
    errors:false,
loading:false
}
export const catalogReducer = (state = initialState , action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {...state,loading: true}
        case 'FETCH_BOOKS_SUCCESS':
            return {...state, books:action.payload, loading: false}
        case 'FETCH_BOOKS_FAILED':
            return {...state,  loading: false,errors: true}
        default:
            return state
    }
}