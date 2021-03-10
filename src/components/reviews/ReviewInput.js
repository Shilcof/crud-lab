import React, { Component } from 'react';
// import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: "",
    restaurantId: this.props.restaurant.id
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        Review Input:
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Review name:</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} ></input>
          <input type="submit" value="Create Review"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
