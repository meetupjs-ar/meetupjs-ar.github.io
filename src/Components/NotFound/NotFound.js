import React, { PureComponent } from 'react';

class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <h2>404 - Page Not Found.</h2>
        <a href="/" rel="noopener noreferrer">
          Volver a la página principal
        </a>
      </div>
    );
  }
}

export default NotFound;
