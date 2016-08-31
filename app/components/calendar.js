import React, { Component } from 'react';
import { connect } from 'react-redux';

const HOURS = ['7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm'];
const DAYS = [
  { dayIndex: 1, name: 'Monday'},
  { dayIndex: 2, name: 'Tuesday'},
  { dayIndex: 3, name: 'Wednesday'},
  { dayIndex: 4, name: 'Thursday'},
  { dayIndex: 5, name: 'Friday'},
];

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.renderDay = this.renderDay.bind(this);
  }

  getOffset(startTime) {
    return 100 + (100 * (startTime - 7)) + 'px';
  }

  getHeight(duration) {
    return (duration * 100) + 'px';
  }

  renderEvent(name, start, end) {
    let duration = end - start;
    return <li className="calendar__event"
               key={name}
               style={{ top: this.getOffset(start), height: this.getHeight(duration) }}>
                 { name }
               </li>
  }

  renderEvents(day) {
    return this.props.events.map(event => {
      if (event.dayIndex.includes(day)) {
        return this.renderEvent(event.name, event.timeIndex[0], event.timeIndex[1]);
      }
    });
  }

  renderHours(hour, i) {
    return <li key={ i } className="calendar__hour-item">{ hour }</li>;
  }

  renderDay(day) {
    return (
      <li key={ day.dayIndex } className="calendar__day">
        <h3 className="calendar__day-title">{ day.name }</h3>
        <ul className="calendar__hours">
          { this.renderEvents(day.dayIndex) }
        </ul>
      </li>
    );
  }

  render() {
    return (
      <div className="calendar">
        <ul className="calendar__hour-list">
          { HOURS.map(this.renderHours) }
        </ul>
        <ul className="calendar__week">
          { DAYS.map(this.renderDay) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { events: state.courses.filter(course => course.isAdded) || [] };
}

export default connect(mapStateToProps)(Calendar);
