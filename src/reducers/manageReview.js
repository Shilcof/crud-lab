import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch (action.type) {
        case "ADD_REVIEW":
            return [...state, {...action.review, id: cuid()}]
        case "DELETE_REVIEW":
            const index = state.findIndex(r=>r.id===action.id)
            return [...state.slice(0,index), ...state.slice(index+1)]
        default:
            return state
    }
}
