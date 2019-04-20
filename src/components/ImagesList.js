import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImagesList = props => {
  const images = props.images.map(imag => {
    return <ImageCard key={imag.id} image={imag} alt='' />;
  });
  return <div className='image-list'>{images}</div>;
};

export default ImagesList;
