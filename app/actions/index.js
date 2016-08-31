import axios from 'axios';
import * as TYPES from './types';

function getAll() {
  const request = axios.get('/courses');

  return {
    type: TYPES.GET_ALL,
    payload: request
  };
}

function addCourse(course) {
  const request = axios.get(`/courses/conflicts/${ course.id }`);

  return [
    {
      type: TYPES.ADD,
      payload: course
    },
    {
      type: TYPES.SET_CONFLICTS,
      payload: request
    }
  ];
}

function removeCourse(course) {
  return [
    {
      type: TYPES.REMOVE,
      payload: course
    },
    {
      type: TYPES.REMOVE_CONFLICTS,
      payload: course
    }
  ];
}

export { getAll, addCourse, removeCourse };
