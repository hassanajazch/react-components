import React from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';


BigCalendar.momentLocalizer(moment);

class CalendarPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const todayDate = moment().toDate();
    const events = [
      {
        title: 'Visit to San Francisco',
        start: moment().toDate(),
        end: moment().add(5, 'day').toDate()
      },
      {
        title: 'Meeting with Investors',
        start: moment().add(8, 'day').toDate(),
        end: moment().add(11, 'day').toDate()
      },
      {
        title: 'Sports day at office',
        start: moment().add(13, 'day').toDate(),
        end: moment().add(15, 'day').toDate()
      }
    ];
    return (
      <div className="main-app">
        <BigCalendar
          events={events}
          views={['month', 'agenda', 'week']}
          step={60}
          showMultiDayTimes
          defaultDate={moment().toDate()}
        />
      </div>
    );
  }
}


export default CalendarPage;
