import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import * as styles from './ServiceStatus.module.css';

class ServiceStatus extends PureComponent {
  static props = {
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.number.isRequired
  };

  getStatusColor = (status) => {
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
      <div className={`${styles.serviceStatus} b--black-10 ba bg-white br2 bw1 flex pa3`}>
        <div className="pr3 pt1">
          <div
            className={`${this.getStatusColor(status)} b--black-10 ba bg-animate br-100 bw1 h1 w1`}
          />
        </div>
        <div className="flex-auto">
          <p className="mb1 mt0">
            <strong>{name}</strong>
          </p>
          <p className={`${styles.serviceDescription} mv0`}>{description}</p>
        </div>
      </div>
    );
  }
}

export default ServiceStatus;
