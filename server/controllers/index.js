const express = require('express');
const router = express.Router();
const coursesRoutes = require('./courses');

router.use('/courses', coursesRoutes);

module.exports = router;
