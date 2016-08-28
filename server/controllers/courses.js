const storage = require('node-persist');
const router = require('express').Router();
const courses = require('../data/catalog').courses;

// Get All Courses
function getAllCourses(req, res) {
  res.json(courses);
}

// Get Course by Name
function getCourseByName(req, res) {
  var name = decodeURIComponent(req.params.name).toLowerCase();

  var course = courses.find(function(course) {
    return course.name.toLowerCase() == name;
  });

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "A Course by that name was not found." });
  }
}

// Get Course by ID
function getCourseById(req, res) {
  var id = req.params.id;

  var course = courses.find(function(course) {
    return course.id == id;
  });

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: "A Course by that ID was not found." });
  }
}

// Get Conflicting Courses
function getConflictingCourses(req, res) {
  var conflictingCourses = [];
  var id = req.params.id;

  var courseA = courses.find(function(course) {
    return course.id == id;
  });

  if (!courseA) return res.status(400).json({ error: 'A Course by that ID was not found' });

  // Courses aren't the same course
  conflictingCourses = courses.filter(function(courseB) {
    return courseB.id != id;
  });

  // Courses on same day
  conflictingCourses = conflictingCourses.filter(function(courseB) {
    return courseA.dayIndex.find(function(dayA) {
      return courseB.dayIndex.find(function(dayB) {
        return dayA == dayB;
      });
    });
  });

  // Courses during same time
  conflictingCourses = conflictingCourses.filter(function(courseB) {
    return courseA.timeIndex[0] > courseB.timeIndex[0] && courseA.timeIndex[0] < courseB.timeIndex[1] || /* A Starts during B */
           courseB.timeIndex[0] > courseA.timeIndex[0] && courseB.timeIndex[0] < courseA.timeIndex[1] || /* B Starts during A */
           courseA.timeIndex[0] == courseB.timeIndex[0];                             /* A and B do not start at the same time */
  });

  res.json(conflictingCourses);
}

router.get('/conflicts/:id', getConflictingCourses);

// Get All Courses
router.get('/', function(req, res) {
  var name, course;

  if (req.query.name) {
    name = decodeURIComponent(req.query.name).toLowerCase();
    course = courses.find(function(course) {
      return course.name.toLowerCase() == name;
    });
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: 'A Course with that name was not found.' });
    }
  }

  res.json(courses);
});

// Get Course by ID
router.get('/:id', function(req, res) {

  // Look for the Course
  var course = courses.find(function(course) {
    return req.params.id == course.id;
  });

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({ error: 'The Course was not found' });
  }
});

module.exports = router;
