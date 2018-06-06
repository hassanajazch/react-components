import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="sidenav">
          <hr/>
          <h1 className="logo-color">Inksacape</h1>
          <hr/>
          <div className="tablist-height">
            <IndexLink to="/" activeClassName="active">- Calendar</IndexLink>
            {" | "}
            <Link to="/courses" activeClassName="active">- Courses</Link>
            {" | "}
            <Link to="/notification" activeClassName="active">- Notifications</Link>
            {" | "}
            <Link to="/tabs" activeClassName="active">- Tabs</Link>
          </div>
      </div>
    </div>
  );
};

export default Header;
