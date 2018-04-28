import React from 'react';
import toastr from 'toastr';
import ReactDOM from 'react-dom';
import { Link, IndexLink} from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class NotificationPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.generateNoitifcation = this.generateNoitifcation.bind(this);
  }

  generateNoitifcation(event) {
    toastr.success("Good Morning, I am a test Notification :) ");
  }

  render() {
    return (
      <div>
        <h1>Hit Button To Generate Notification</h1>
        <button onClick={this.generateNoitifcation} className="button">Click Me</button>
      </div>
    );
  }
}


export default NotificationPage;
