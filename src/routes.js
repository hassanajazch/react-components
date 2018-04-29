import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CalendarPage from './components/calendar/CalendarPage';
import NotificationPage from './components/notification/NotificationPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import TabPage from './components/tabs/TabPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={CalendarPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="notification" component={NotificationPage} />
    <Route path="tabs" component={TabPage} />
  </Route>
);
