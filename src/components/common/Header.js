import React from 'react';
import {Link} from 'react-router';

const Header = () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#header-wrapper" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Workout Tracker</a>
        </div>

        <div className="collapse navbar-collapse" id="header-wrapper">  
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Workouts</Link></li>
            <li><Link to="/create">Create New</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Header;
