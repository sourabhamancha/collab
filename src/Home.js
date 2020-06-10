import React, { Component } from 'react';
import { Link } from '@reach/router';

class Home extends Component {
  render() {
    const user = this.props.user
    return (
      <div className="container text-center">
          <div className="row" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh' }}>
              <div className="col-sm">
                <h1 className="text-success">Collab</h1>
                <p className="font-weight-light lead">
                  Create meetings and manage attendees.
                </p>
              </div>
          <div class="col-sm">
            { user ? (
              <Link to="/meetings" className="btn btn-success btn-lg btn-block">
                Your Collabs
              </Link>
            ) : (
                <div>
                  <Link to="/register" className="btn btn-outline-info btn-lg btn-block">
                    Register
                  </Link>
                  <Link to="/login" className="btn btn-outline-primary btn-lg btn-block">
                    Log In
                  </Link></div>
            ) }
            </div>
          </div>
      </div>
    );
  }
}
export default Home;