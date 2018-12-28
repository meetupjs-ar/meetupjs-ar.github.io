import Carousel from '@brainhubeu/react-carousel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class PiolaSlider extends Component {
  state = {
    images: [],
    value: 0
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
          sha: file.sha,
          src: file.download_url
        }))
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  };

  isNextValueInRange = (nextValue, modifier, length) => {
    const newCalculatedValue = nextValue + modifier;

    return newCalculatedValue > -1 && newCalculatedValue < length;
  };

  onChange = modifier => {
    const { value } = this.state;
    const newValue = value + modifier;

    this.setState({ value: newValue });
  };

  renderIcon = (name, modifier, value, length) => {
    const isNextValueInRange = this.isNextValueInRange(value, modifier, length);

    return (
      <button
        className={`bg-transparent bn grow outline-0 pa0 pointer ${
          isNextValueInRange ? '' : 'visibility-hidden'
        }`}
        type="button"
        onClick={() => this.onChange(modifier)}
      >
        <box-icon name={name} color="#2e282a" type="solid" />
      </button>
    );
  };

  render() {
    const { images, value } = this.state;

    return (
      Boolean(images.length) && (
        <div className="mv4">
          <div className="bg-black">
            <Carousel draggable={false} keepDirectionWhenDragging value={value}>
              {images.map(image => (
                <div className="flex items-center vh-50" key={image.sha}>
                  <img alt="" className="mh-100" src={image.src} style={{ width: 'auto' }} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex items-center justify-center mt3">
            {this.renderIcon('left-arrow', -1, value, images.length)}
            <p className="black-50 f6 mv0 pb1 tc w4">
              <span className="b">{value + 1}</span>
              <span> de </span>
              <span className="b">{images.length}</span>
            </p>
            {this.renderIcon('right-arrow', 1, value, images.length)}
          </div>
        </div>
      )
    );
  }
}

PiolaSlider.propTypes = {
  relativePath: PropTypes.string.isRequired
};

export default PiolaSlider;
