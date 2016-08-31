import axios from 'axios';
import * as TYPES from './types';

function getAll() {
  const request = axios.get('/courses');

  return {
    type: TYPES.GET_ALL,
    payload: request
  };
}

function getConflicts(id) {
  const request = axios.get(`/courses/conflict/${ id }`);

  return {
    type: TYPES.GET_CONFLICTS,
    payload: request
  };
}

function add(course) {

  return {
    type: ADD,
    payload: course
  };
}

export { getAll, getConflicts, add };
