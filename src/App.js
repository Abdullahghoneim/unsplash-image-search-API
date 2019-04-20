import React, { Component } from 'react';
import './App.css';
import unsplahApi from './api/unsplash';
import Searchbox from './components/Searchbox';
import ImagesList from './components/ImagesList';
class App extends Component {
  state = {
    images: []
  };
  onSearchSubmit = term => {
    unsplahApi
      .get('/search/photos', {
        params: { query: term }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
  };
  render() {
    return (
      <div className='ui container'>
        <Searchbox
          onSubmit={this.onSearchSubmit}
          length={this.state.images.length}
        />
        <ImagesList images={this.state.images} />
      </div>
    );
  }
}

export default App;
