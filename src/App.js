import React, { Component } from 'react';
import './App.css';
import unsplahApi from './api/unsplash';
import Searchbox from './components/Searchbox';
import ImagesList from './components/ImagesList';
class App extends Component {
  state = {
    images: [],
    showSpinner: false
  };
  onSearchSubmit = term => {
    this.setState({ showSpinner: true });
    unsplahApi
      .get('/search/photos', {
        params: { query: term }
      })
      .then(response => {
        this.setState({ images: response.data.results });
        this.setState({ showSpinner: false });
      });
  };
  render() {
    return (
      <div className='ui container'>
        <Searchbox
          onSubmit={this.onSearchSubmit}
          length={this.state.images.length}
        />
        {this.state.showSpinner ? (
          <div className='ui active inline inverted dimmer'>
            <div className='ui text loader'>Loading</div>
          </div>
        ) : (
          <ImagesList images={this.state.images} />
        )}
      </div>
    );
  }
}

export default App;
