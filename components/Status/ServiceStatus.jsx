import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ServiceStatus extends Component {
  getStatusColor = status => {
    switch (status) {
      case 0:
        return 'bg-secondary';
      case 1:
        return 'bg-success';
      case 2:
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  render() {
    const { description, name, status } = this.props;

    return (
      <>
        <div className="border-black-10 bg-white border-2 flex mb-4 p-4 rounded">
          <div className="pr-4 pt-1">
            <div
              className={classnames([
                this.getStatusColor(status),
                'border-black-10 bg-animate border-2 br-100 h-4 rounded-full w-4'
              ])}
            />
          </div>
          <div className="flex-auto">
            <p className="font-bold mb-2">{name}</p>
            <p className="text-quaternary">{description}</p>
          </div>
        </div>
      </>
    );
  }
}

ServiceStatus.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired
};

export default ServiceStatus;
