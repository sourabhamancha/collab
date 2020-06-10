import React, { Component } from 'react';
import { Link } from '@reach/router';

class Welcome extends Component {
  render() {
    const { userName } = this.props;
    return (
      <div>
        <div className="font-italic w-25 text-left mt-3 p-3 mx-auto">
          <span className="font-weight-bold">
            Welcome  { userName }
          </span>
        </div>

      </div>
    );
  }
}
export default Welcome;