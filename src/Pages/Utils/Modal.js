import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static props = {
    children: PropTypes.node.isRequired,
    hideModal: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };

  closeModalOnEscapeKey = () => {
    this.props.hideModal();
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.closeModalOnEscapeKey);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.closeModalOnEscapeKey);
  };

  handleClose = (event, hideModal) => event.target === event.currentTarget && hideModal();

  render() {
    const { children, hideModal, show } = this.props;

    return (
      show && (
        <div
          className="bg-black-70 fade-in fixed flex items-center justify-center left-0 pointer top-0 vh-100 w-100 z-2"
          onClick={(event) => this.handleClose(event, hideModal)}
        >
          <div className="center cursor-default fade-in-down mw7 w-100">{children}</div>
        </div>
      )
    );
  }
}

export default Modal;
