import React, { Component } from 'react';
import {connect} from 'react-redux'
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const addRestaurant = (restaurant) => ({
  type: "ADD_RESTAURANT",
  restaurant
}) 

const deleteRestaurant = (id) => ({
  type: "DELETE_RESTAURANT",
  id
}) 

// export default connect((state)=>(console.log(state)),{addRestaurant, deleteRestaurant})(RestaurantsContainer);
export default connect(({restaurants})=>({restaurants}),{addRestaurant, deleteRestaurant})(RestaurantsContainer);
