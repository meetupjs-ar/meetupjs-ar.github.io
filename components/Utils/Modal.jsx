import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  closeModalOnEscapeKey = event => {
    const { hideModal } = this.props;

    return event.which === 27 && hideModal();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.closeModalOnEscapeKey);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeModalOnEscapeKey);
  };

  handleClose = event => {
    const { hideModal } = this.props;

    return event.target === event.currentTarget && hideModal();
  };

  render() {
    const { children } = this.props;

    return (
      <div
        className="bg-overlay cursor-pointer fade-in fixed flex h-screen items-center justify-center left-0 top-0 w-full z-40"
        onClick={this.handleClose}
        role="presentation"
      >
        <div className="fade-in-down max-w-3xl mx-auto w-full">{children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
  hideModal: PropTypes.func.isRequired
};

export default Modal;
