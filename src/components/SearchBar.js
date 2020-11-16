import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onIputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure call the callback from parent component
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Videos Search</label>
            <input 
              type="text" 
              value={ this.state.term } 
              onChange={this.onIputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;