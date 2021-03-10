import restaurants from './manageRestaurant'
import reviews from './manageReview'
import {combineReducers} from 'redux'

export default combineReducers({restaurants, reviews})
