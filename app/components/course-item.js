import React from 'react';


const CourseItem = (props) => {
  return (
    <li className="course-list__item" onClick={ props.onClickEvent }>
      <div className="course-list__item-container">
        <h5 className="course-list__title">{ props.name }</h5>
      </div>
    </li>
  );
}

export default CourseItem;
