import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ""
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        Restaurant Input:
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="text">Restaurant name:</label>
          <input type="text" name="text" id="text" value={this.state.text} onChange={this.handleChange} ></input>
          <input type="submit" value="Create Restaurant"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
