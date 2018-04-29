import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOM from 'react-dom';
import { Link, IndexLink} from 'react-router';

class TabPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="main-app">
        <Tabs>
          <TabList>
            <Tab>Message</Tab>
            <Tab>News Feed</Tab>
            <Tab>Profile</Tab>
            <Tab>Setting</Tab>
          </TabList>

          <TabPanel>
            <h2>Message will be shown here :)</h2>
          </TabPanel>
          <TabPanel>
            <h2>This is your news feed. :)</h2>
          </TabPanel>
          <TabPanel>
            <h2>Your profile and personal info. :)</h2>
          </TabPanel>
          <TabPanel>
            <h2>All profile settings. :)</h2>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


export default TabPage;
