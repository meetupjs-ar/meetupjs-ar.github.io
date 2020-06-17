import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import { Masonry } from 'react-masonry-responsive';

class PiolaSlider extends Component {
  phrases = {
    noPhotosProvided: 'No hay fotelis 😭',
    showPhotoList: 'Mostrar miniaturas ',
    hidePhotoList: 'Ocultar miniaturas ',
  };

  constructor(props) {
    super(props);

    this.state = {
      activePhotoIndex: 0,
      galleryOpened: false,
      images: [],
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    try {
      const { relativePath } = this.props;
      const path = `https://api.github.com/repos/meetupjs-ar/meetupjs-ar.github.io/contents${relativePath}`;
      const files = await fetch(path).then((response) => response.json());

      this.setState({
        images: files.map((file, index) => ({
          index: file.sha,
          number: index,
          photo: file.download_url,
        })),
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  getMasonryImages = () => {
    const { images } = this.state;

    return images.map((image, index) => ({
      key: index,
      node: (
        <button type="button" onClick={() => this.toggleGallery(index)}>
          <img src={image.photo} alt="" className="grow image-shadow" />
        </button>
      ),
    }));
  };

  toggleGallery = (photoIndex) => {
    this.setState((prevState) => ({
      activePhotoIndex: photoIndex,
      galleryOpened: !prevState.galleryOpened,
    }));
  };

  render() {
    const { activePhotoIndex, images, galleryOpened } = this.state;

    return (
      Boolean(images.length) && (
        <div className="image-shadow-container">
          <Masonry gap={20} items={this.getMasonryImages()} minColumnWidth={250} />
          <ReactBnbGallery
            activePhotoIndex={activePhotoIndex}
            onClose={this.toggleGallery}
            photos={images}
            phrases={this.phrases}
            show={galleryOpened}
          />
        </div>
      )
    );
  }
}

PiolaSlider.propTypes = {
  relativePath: PropTypes.string.isRequired,
};

export default PiolaSlider;
