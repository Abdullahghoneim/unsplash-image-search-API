import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 81b14dd3cd785a60843a22fb380218a15fc6da18579cb097d0ee1a4c36d05f64'
  }
});
