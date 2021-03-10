import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
            return [...state, {...action.restaurant, id: cuid()}]
        case "DELETE_RESTAURANT":
            const index = state.findIndex(r=>r.id===action.id)
            return [...state.slice(0,index), ...state.slice(index+1)]
        default:
            return state
    }
}

// export default function manageRestaurants(state = [], action) {
//     switch (action.type) {
//         case "ADD_RESTAURANT":
//             return {...state, restaurants: [...state.restaurants, {...action.restaurant, id: cuid()}]}
//         case "DELETE_RESTAURANT":
//             const index = state.restaurants.findIndex(r=>r.id===action.id)
//             return {...state, restaurants: [...state.restaurants.slice(0,index), ...state.restaurants.slice(index+1)]}
//         default:
//             return state
//     }
// }
