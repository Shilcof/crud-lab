import React, { Component } from 'react';
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant={this.props.restaurant} addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews.filter(r=>r.restaurantId===this.props.restaurant.id)} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const addReview = (review) => ({
  type: "ADD_REVIEW",
  review
}) 

const deleteReview = (id) => ({
  type: "DELETE_REVIEW",
  id
}) 

export default connect(({reviews})=>({reviews}),{addReview,deleteReview})(ReviewsContainer);
