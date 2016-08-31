import React from 'react';

function renderConflict(conflict) {
  return <li className="course-item__conflict-item">{ conflict.name }</li>;
}

const conflictList = (props) => {

  return (
    <div>
      <h6 className="course-item__conflict-header">{ "Time Conflicts" }</h6>
      <ul className="course-item__conflict-list">
        { props.list.map(renderConflict) }
      </ul>
    </div>
  );
};

export default conflictList;
