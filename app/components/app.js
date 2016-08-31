import React, { Component } from 'react';
import CourseList from './course-list';
import Calendar from './calendar';
import normalize from '../../node_modules/normalize.css/normalize.css';
import style from '../styles/components/app.scss';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <div className="app-controls">
          <h1 className="app-title">Course Calendar Planner</h1>
          <CourseList />
        </div>
        <Calendar />
      </div>
    );
  }
}

export default App;
