import React, { Component } from 'react';
import Header from './header';
import CourseList from './course-list';
import Calendar from './calendar';
import normalize from '../../node_modules/normalize.css/normalize.css';
import style from '../styles/components/app.scss';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <div className="app-controls">
          <Header text="Course Planner" />
          <CourseList />
        </div>
        <Calendar />
      </div>
    );
  }
}

export default App;
