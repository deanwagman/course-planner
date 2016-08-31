import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import CourseItem from './course-item';
import axios from 'axios';
import style from '../styles/components/course-list.scss';

class CourseList extends Component {

  constructor(props) {
    super(props);

    // Bind all the this
    // this.handleCourseAction = this.handleCourseAction.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  componentDidMount() {
    this.props.getAll();
  }

  handleClickEvent(course) {
    console.log(course);
  }

  renderItem(course) {
    return <CourseItem
              { ...course }
              key={ course.name }
              onClickEvent={ this.handleClickEvent.bind(this, course) } />;
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
