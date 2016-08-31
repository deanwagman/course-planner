import { GET_ALL, ADD, REMOVE, SET_CONFLICTS, REMOVE_CONFLICTS } from '../actions/types';

const defaults = {
  isAdded: false,
  isConflicted: false,
  conflictingCourses: []
};

function coursesReducer(state = [], action) {

  ////////////////////////////////////////////
  switch (action.type) {

    //////////////////////////////////////////
    case GET_ALL:

      // If this is the first run
      if (!state.length) {
        return action.payload.data.map((course) => {
          return { ...course, ...defaults };
        });
      }

      return [ ...action.payload.data ];

    //////////////////////////////////////////
    case ADD:

      // If the Course hasn't already been added, or isConflicted
      if (!action.payload.isAdded && !action.payload.isConflicted) {
        return [
          ...state.slice(0, action.payload.id),
          { ...action.payload, isAdded: true },
          ...state.slice(action.payload.id + 1)
        ];
      }

      break;

    ///////////////////////////////////////////
    case REMOVE:

      // IF the Course has been added
      if (action.payload.isAdded) {
        return [
          ...state.slice(0, action.payload.id),
          { ...action.payload, isAdded: false },
          ...state.slice(action.payload.id + 1)
        ];
      }

      break;

    ///////////////////////////////////////////
    case SET_CONFLICTS:

    // If there are conflicts
    if (action.payload.data.length) {

      let newCourses = [...state];
      let originalCourse = action.payload.data[0];

      // Add conflicts to original course
      newCourses[action.payload.data[0].id].conflictingCourses = action.payload.data;

      // Add Original course to conflicting Courses
      newCourses = action.payload.data.reduce((prev, curr, index) => {

        // Push the original course id to the conflicing
        // course's conflicting courses array
        let id = curr.id;
        let conflictingCourse = prev[id];

        // The First one is the original
        if (index !== 0) {
          conflictingCourse.isConflicted = true;
          conflictingCourse.conflictingCourses = [...conflictingCourse.conflictingCourses, originalCourse];
        }

        prev[id] = conflictingCourse;

        return prev;
      }, [...newCourses]);

      return newCourses;
    }

      break;

      ////////////////////////////////////////////
      case REMOVE_CONFLICTS:

        if (action.payload.isAdded) {

          // Removing Conflictions from each conflicting Course
          let newCourses = action.payload.conflictingCourses.reduce((prev, curr, index) => {

            prev[curr.id].conflictingCourses =
                [...prev[curr.id].conflictingCourses.slice(0, prev[curr.id].conflictingCourses.indexOf(action.payload.id)),
                 ...prev[curr.id].conflictingCourses.slice(action.payload.id + 1)];

            if (prev[curr.id].conflictingCourses.length == 0) {
              prev[curr.id].isConflicted = false;
            }

            return [...prev];
          }, [...state]);

          newCourses[action.payload.id].conflictingCourses = [];

          return newCourses;
        }

        break;

  }

  return state;
};

export default coursesReducer;
