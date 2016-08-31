import { GET_ALL } from '../actions/types';

const defaults = {
  isAdded: false,
  isConflicted: false,
  conflictingCourses: []
};

function getAll(state = [], action) {
  switch (action.type) {
    case GET_ALL:

      // If this is the first run
      if (!state.length) {
        return action.payload.data.map((course) => {
          return { ...course, ...defaults };
        });
      }

      return [ ...action.payload.data ];
  }

  return state;
};

export { getAll };
