import React from 'react';

class ImageCard extends React.Component {
  constructor() {
    super();
    this.state = { span: 0 };
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpan);
  }
  setSpan = () => {
    const height = this.imageRef.current.clientHeight;
    console.log(height);
    const span = Math.ceil(height / 10 + 1);
    this.setState({ span });
  };
  render() {
    const { urls, description } = this.props.image;
    return (
      <img
        style={{ gridRowEnd: `span ${this.state.span}` }}
        ref={this.imageRef}
        src={urls.regular}
        alt={description}
        title={description}
      />
    );
  }
}

export default ImageCard;
