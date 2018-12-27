import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  // Handle input change
  onInputChanged = event => {
    this.setState({
      term: event.target.value
    });
  };

  // Handle onform submit
  onFormSubmit = event => {
    event.preventDefault();
    // Call a callback passed from the parent app component
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div onSubmit={this.onFormSubmit} className="ui segment search-bar">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChanged}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
