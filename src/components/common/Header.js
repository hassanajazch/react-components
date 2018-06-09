import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from '../../../assets/logo/company-logo.png';

const Header = () => {
  return (
    <div>
      <div className="sidenav">
          <img src={logo} className="company-logo"/>
          <hr/>
          <div className="tablist-height">
            <IndexLink to="/" activeClassName="active">- Calendar</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">- Courses</Link>
            {" | "}
            <Link to="/notification" activeClassName="active">- Notifications</Link>
            {" | "}
            <Link to="/tabs" activeClassName="active">- Tabs</Link>
            {" | "}
            <Link to="/graph" activeClassName="active">- Line Graph</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
