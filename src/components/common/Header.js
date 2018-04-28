import React, {PropTypes} from 'react';
import { Link, IndexLink} from 'react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

const Header = () => {
  return (
    <div className="sidenav">
        <IndexLink to="/" activeClassName="active">- Calendar</IndexLink>
        {" | "}
        <Link to="/courses" activeClassName="active">- Courses</Link>
        {" | "}
        <Link to="/notification" activeClassName="active">- Notifications</Link>
    </div>
  );
};

export default Header;
