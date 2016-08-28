import React, { Component } from 'react';
import CourseItem from './course-item';
import axios from 'axios';

class CourseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  componentDidMount() {
    axios.get('/courses')
      .then((response) => {
        this.setState({ courses: response.data});
      });
  }

  renderItem(course) {
    return <CourseItem name={ course.name } />;
  }

  render() {
    return (
      <ul className="course-list">
        { this.state.courses.map(this.renderItem) }
      </ul>
    );
  }
}

export default CourseList;
