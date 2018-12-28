import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

class PiolaSlider extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    try {
      const { relativePath } = this.props;
      const path = `https://api.github.com/repos/meetupjs-ar/meetupjs-ar.github.io/contents${relativePath}`;
      const files = await fetch(path).then(response => response.json());

      this.setState({
        images: files.map(file => ({
          original: file.download_url,
          thumbnail: file.download_url
        }))
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  render() {
    const { images } = this.state;

    return (
      images.length && (
        <div className="gallery mv4 relative z-0">
          <ImageGallery items={images} lazyLoad showIndex showPlayButton={false} />
        </div>
      )
    );
  }
}

PiolaSlider.propTypes = {
  relativePath: PropTypes.string.isRequired
};

export default PiolaSlider;
