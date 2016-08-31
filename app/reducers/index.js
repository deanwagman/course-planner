import { combineReducers } from 'redux';
import * as coursesReducers from './courses';

const rootReducer = combineReducers({
  courses: coursesReducers.getAll
});

export default rootReducer;
