import React, { Component } from 'react';

const CourseItem = (props) => {
  return (
    <li key={ props.name } className="course-item">{ props.name }</li>
  );
};

export default CourseItem;
