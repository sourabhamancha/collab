import React, { Component } from 'react';
import { FaHandshake } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logoutUser } = this.props;
    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-success navbar-dark higher">
  <div className="container-fluid">

    <Link to="/" className="navbar-brand">
      <FaHandshake />
    </Link>
    <Link to="/" className="navbar-brand ml-auto">
        Collab
    </Link>

        <div className="navbar-nav ml-auto">
            {user && (<Link className="nav-item nav-link" to="/meetings">
              Collabs
            </Link>)}
            { !user && (<Link className="nav-item nav-link" to="/login">
              Log In
            </Link>) }
            {!user && (<Link className="nav-item nav-link" to="/register">
              Register
            </Link>)}
            {user && (<Link className="nav-item nav-link" to="/login"
            onClick = {e => logoutUser(e)}>
              Log Out
            </Link>)}
    </div>
  </div>
</nav>
    );
  }
}
export default Navigation;