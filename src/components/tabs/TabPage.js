import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOM from 'react-dom';
import { Link, IndexLink} from 'react-router';
import news1  from "../../../assets/newsfeed/fifa.jpg";
import news2  from "../../../assets/newsfeed/trump.jpg";

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

          <TabPanel className="message-top-margin">
            <h3 className="inbox-message">hello</h3>
            <h3 className="inbox-message inbox-message-guest">Hi, How are you?</h3>
            <h3 className="inbox-message">I am fine. Where have you been?</h3>
            <h3 className="inbox-message inbox-message-guest">I was out of country in last week, so could not talk you.</h3>
            <h3 className="inbox-message">Ok, let's meet soon</h3>
          </TabPanel>
          <TabPanel>
            <div>
              <div className="news-feed">
                <img src={news1} className="news-feed-images"/>
                <h3> Fifa is rocking the world....</h3>
              </div>
              <div className="news-feed">
                <img src={news2} className="news-feed-images"/>
                <h3> Trump make a big news...</h3>
              </div>
            </div>
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
