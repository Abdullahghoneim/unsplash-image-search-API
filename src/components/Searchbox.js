import React from 'react';

class SearchBox extends React.Component {
  state = { term: '' };
  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.onSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor='Searchbox'>Search box</label>
            <input
              type='text'
              onChange={this.onInputChange}
              value={this.state.term}
            />
            <p style={{ padding: '1.3rem' }}>
              {' '}
              Found : {this.props.length} Images{' '}
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
