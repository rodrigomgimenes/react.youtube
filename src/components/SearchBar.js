import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  // const onIputChange = (event) => {
  //   setTerm(event.target.value);
  // }

  const onSubmit = event => {
    event.preventDefault();

    // TODO: Make sure call the callback from parent component
    onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit} >
        <div className="field">
          <label>Videos Search</label>
          <input 
            type="text" 
            value={term} 
            // onChange={onIputChange}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

// class SearchBar extends React.Component {
//   // state = { term: '' };

//   // onIputChange = (event) => {
//   //   this.setState({ term: event.target.value });
//   // }

//   // onFormSubmit = event => {
//   //   event.preventDefault();

//   //   // TODO: Make sure call the callback from parent component
//   //   this.props.onFormSubmit(this.state.term);
//   // }

//   // render() {
//   //   return (
//   //     <div className="search-bar ui segment">
//   //       <form className="ui form" onSubmit={this.onFormSubmit} >
//   //         <div className="field">
//   //           <label>Videos Search</label>
//   //           <input 
//   //             type="text" 
//   //             value={ this.state.term } 
//   //             onChange={this.onIputChange}
//   //           />
//   //         </div>
//   //       </form>
//   //     </div>
//   //   );
//   // }
// }

export default SearchBar;