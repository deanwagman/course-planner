import React from 'react';
import ConflictList from './conflict-list';

const CourseItem = (props) => {
  let className = "course-list__item";
  let conflictList;

  // Conditional Classes
  if (props.isAdded) className += " course-list__item--selected";
  if (props.isConflicted) className += " course-list__item--conflicted";
  if (!props.isAdded && props.isConflicted) conflictList = <ConflictList list={ props.conflictingCourses } />;

  return (
    <li className={ className } onClick={ props.onClickEvent }>
      <div className="course-list__item-container">
        <h5 className="course-list__title">{ props.name }</h5>
          { conflictList }
      </div>
    </li>
  );
}

export default CourseItem;
