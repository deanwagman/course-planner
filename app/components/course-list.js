import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import CourseItem from './course-item';
import axios from 'axios';

class CourseList extends Component {

  constructor(props) {
    super(props);

    // Bind all the this
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.getAll();
  }

  renderItem(course) {
    return <CourseItem
              { ...course }
              key={ course.name }
              onClickEvent={ !course.isAdded ?
                this.props.addCourse.bind(this, course) :
                this.props.removeCourse.bind(this, course)} />;
  }

  render() {
    return (
      <ul className="course-list">
        { this.props.courses.map(this.renderItem) }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(mapStateToProps, actions)(CourseList);
