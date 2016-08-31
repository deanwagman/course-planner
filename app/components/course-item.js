import React from 'react';

const CourseItem = (props) => {
  let className = "course-list__item";

  // Conditional Classes
  if (props.isAdded) className += " course-list__item--selected";
  if (props.isConflicted) className += " course-list__item--conflicted";

  return (
    <li className={ className } onClick={ props.onClickEvent }>
      <div className="course-list__item-container">
        <h5 className="course-list__title">{ props.name }</h5>
      </div>
    </li>
  );
}

export default CourseItem;
