import PropTypes from 'prop-types';
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import css from 'styled-jsx/css';

const serviceStatusStyles = css`
  .serviceStatus + .serviceStatus {
    margin-top: 1rem;
  }
`;

class ServiceStatus extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired
  };

  getStatusColor = status => {
    switch (status) {
      case 0:
        return 'bg-yellow';
      case 1:
        return 'bg-green';
      case 2:
        return 'bg-red';
      default:
        return 'bg-moon-gray';
    }
  };

  render() {
    const { description, name, status } = this.props;

    return (
      <React.Fragment>
        <style jsx>{serviceStatusStyles}</style>
        <div className="b--black-10 ba bg-white br2 bw1 flex pa3 serviceStatus">
          <div className="pr3 pt1">
            <div
              className={`${this.getStatusColor(
                status
              )} b--black-10 ba bg-animate br-100 bw1 h1 w1`}
            />
          </div>
          <div className="flex-auto">
            <p className="mb1 mt0">
              <strong>{name}</strong>
            </p>
            <p className="mv0 silver">{description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ServiceStatus;
